import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import {
  AppBar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import {
  BusinessSharp,
  HealthAndSafety,
  MenuOpenOutlined,
  MenuOutlined,
  Science,
  SportsFootball,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Inbox,
  Movie,
  Computer,
} from "@mui/icons-material";
import Logo from "../assets/news.png";

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "#002a3a",
    },
  },
});

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky" color="secondary" style={{zIndex: "100"}}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuOutlined onClick={toggleDrawer} />
            </IconButton>
            <img
              src={Logo}
              alt=""
              style={{ height: "4rem", padding: "0.4rem 2rem" }}
            />
          </Toolbar>
        </AppBar>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
          enableOverlay={true}
          style={{zIndex: "200"}}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MenuOpenOutlined
                    onClick={toggleDrawer}
                    style={{ alignContent: "end", color: "#002a3a" }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BusinessSharp color="secondary" />
                </ListItemIcon>
                <Link
                  to="/business"
                  style={{ textDecoration: "none", color: "#002a3a" }}
                >
                  <ListItemText primary="Business" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Movie color="secondary" />
                </ListItemIcon>
                <Link
                  to="/entertainment"
                  style={{ textDecoration: "none", color: "#002a3a" }}
                >
                  <ListItemText primary="Entertainment" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Inbox color="secondary" />
                </ListItemIcon>
                <Link
                  to="/general"
                  style={{ textDecoration: "none", color: "#002a3a" }}
                >
                  <ListItemText primary="General" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HealthAndSafety color="secondary" />
                </ListItemIcon>
                <Link
                  to="/health"
                  style={{ textDecoration: "none", color: "#002a3a" }}
                >
                  <ListItemText primary="Health" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Science color="secondary" />
                </ListItemIcon>
                <Link
                  to="/science"
                  style={{ textDecoration: "none", color: "#002a3a" }}
                >
                  <ListItemText primary="Science" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SportsFootball color="secondary" />
                </ListItemIcon>
                <Link
                  to="/sports"
                  style={{ textDecoration: "none", color: "#002a3a" }}
                >
                  <ListItemText primary="Sports" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Computer color="secondary" />
                </ListItemIcon>
                <Link
                  to="/technology"
                  style={{ textDecoration: "none", color: "#002a3a" }}
                >
                  <ListItemText primary="Technology" />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default App;
