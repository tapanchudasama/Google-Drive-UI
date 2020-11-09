import React from "react";
import {
  AppBar,
  Drawer,
  CssBaseline,
  Toolbar,
  Divider,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HeaderImage from "../images/HeaderIcon.png";
import { UploadButton } from "./UploadButton";
import { useStyles } from "./SidebarStyles";

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
        </div>
      </Drawer>
    </div>
  );
};
