import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import { AppBar, Toolbar, Divider, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HeaderImage from "../images/HeaderIcon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    height: "50px",
    width: "150px",
    marginBottom: "10px",
  },
  appbar: {
    flexGrow: 1,
    backgroundColor: "white",
    boxShadow: "none",
  },
  searchIcon: {
    margin: theme.spacing(0.7),
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
    padding: theme.spacing(1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
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
      </AppBar>
      <Divider />
    </div>
  );
}
