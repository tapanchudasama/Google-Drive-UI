import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "80%",
    marginLeft: "18%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  griditem: {
    width: "227px",
    height: "48px",
    fontSize: "18px",
  },
  text: {
    padding: theme.spacing(0, 3),
    display: "inline",
    lineHeight: "48px",
    paddingTop: "30px",
    paddingBottom: "30px",
  },
  icon: {
    marginRight: "25px",
    verticalAlign: "middle",
    color: "#5F6368",
  },
}));
