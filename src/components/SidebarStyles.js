import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
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
