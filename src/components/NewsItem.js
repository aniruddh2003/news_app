import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {CopyAll} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const NewsItem = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  let { title, description, imageUrl, newsUrl, content, source, published } = props;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  var dateString = new Date(published).toGMTString();
  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "#002a3a" }}>{source[0]}</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={dateString}
      />
      <CardMedia component="img" height="400rem" image={imageUrl} alt="Image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <br />
        <Typography>By {source}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <CopyAll />
        </IconButton> */}
        <Button color="secondary">
          <a
            href={newsUrl}
            style={{ textDecoration: "none", color: "#002a3a" }}
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{content}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default NewsItem;
