import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, ThemeProvider, Typography, capitalize, createTheme } from "@mui/material";
import Spinner from "./Spinner";

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "#002a3a",
    },
  },
});

const News = (props) => {

  let { country = "in",category= "general" } = props
  const [post, getPost] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const API = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ea098fac05c34ded900f3eaad1032d70&page=${page}`;
  document.title = `First Hand Info - ${capitalize(category)}`
  const fetchPost = () => {
    setLoading(true);
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getPost(res?.articles);
        setTotal(res?.totalResults);
      });
      setLoading(false);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  const handleNextClick = async () => {
    if (page > Math.ceil(total / 20) - 1) {
    } else {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ea098fac05c34ded900f3eaad1032d70&page=${
        page + 1
      }`;
      setLoading(true);
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          getPost(res.articles);
          setTotal(res?.totalResults);
        });
      setLoading(false);
      setPage(page + 1);
    }
  };

  const handlePrevClick = () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ea098fac05c34ded900f3eaad1032d70&page=${
      page - 1
    }`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        getPost(res.articles);
      });
    setLoading(false);
    setPage(page - 1);
  };
  let NullImageLink =
    "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_640.jpg";

  return (
    <ThemeProvider theme={theme}>
      <Box style={{ margin: "0 1rem" }} classname="container">
        <Typography
          variant="h3"
          fontWeight={100}
          align="center"
          margin="35px 0px"
          color="secondary"
        >
          Inshorts - Top {capitalize(category)} Headlines
          {loading && <Spinner />}
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 2, md: 8, lg: 16 }}
        >
          {!loading &&
            post &&
            post.length > 0 &&
            post.map((element, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <NewsItem
                  title={element?.title}
                  description={element?.description}
                  imageUrl={
                    element.urlToImage == null
                      ? NullImageLink
                      : element.urlToImage
                  }
                  newsUrl={element?.url}
                  content={element.content}
                  source={element?.source.name}
                  published={element?.publishedAt}
                />
              </Grid>
            ))}
        </Grid>
        <br />
        <br />
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="secondary"
            size="100rem"
            onClick={handlePrevClick}
            disabled={page <= 1}
          >
            &larr; Prev
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="100rem"
            onClick={handleNextClick}
            disabled={page > Math.ceil(total / 20) - 1}
          >
            Next &rarr;
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default News;
