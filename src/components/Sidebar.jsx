import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import {
  AppBar,
  Drawer,
  CssBaseline,
  Toolbar,
  Divider,
  InputBase,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HeaderImage from "../images/HeaderIcon.png";
import { UploadButton } from "./UploadButton";
import { Temp } from "./Temp";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import StorageOutlinedIcon from "@material-ui/icons/StorageOutlined";
import FolderSharedOutlinedIcon from "@material-ui/icons/FolderSharedOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  image: {
    width: "130px",
    marginLeft: theme.spacing(1),
  },
  appbar: {
    flexGrow: 1,
    backgroundColor: "white",
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  searchIcon: {
    margin: theme.spacing(0.3),
    color: fade("#5f6368", 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
  },
  search: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    position: "relative",
    left: "16%",
    backgroundColor: fade("#F1F3F4", 1),
    borderRadius: "8px",
    width: "50%",
  },
  inputRoot: {
    color: "black",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(0.5, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
  },
}));

export const Sidebar = (props) => {
  const classes = useStyles();
  const { handleAddFolder, handleAddFile } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <img src={HeaderImage} alt="header" className={classes.image} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search in Drive"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
        <Divider />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <UploadButton
            handleAddFile={handleAddFile}
            handleAddFolder={handleAddFolder}
          />
          {/* <List>
            <ListItem button key="My Drive">
              <ListItemIcon>
                <AccountCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="My Drive" />
            </ListItem>
            <ListItem button key="Shared with me">
              <ListItemIcon>
                <FolderSharedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Shared with me" />
            </ListItem>
            <ListItem button key="Recent">
              <ListItemIcon>
                <QueryBuilderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Recent" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="Storage">
              <ListItemIcon>
                <StorageOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Storage" />
            </ListItem>
          </List> */}
        </div>
      </Drawer>
    </div>
  );
};
