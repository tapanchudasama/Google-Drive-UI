import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  fab: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    width: "60%",
    backgroundColor: "#F8F9FA",
    height: "25px",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  dropdown: {
    position: "absolute",
    marginTop: theme.spacing(1),
    flexDirection: "row",
    width: "90%",
    display: "inline",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  carditem: {
    paddingLeft: theme.spacing(3),
    textAlign: "center",
    marginTop: "auto",
    textTransform: "none",
  },
}));
