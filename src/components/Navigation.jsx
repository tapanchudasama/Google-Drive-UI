import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import data from "../data.json";

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    margin: theme.spacing(2, 0),
    marginLeft: "20%",
    display: "flex",
    justifyContent: "flex-start",
  },
  text: {
    textDecoration: "none",
  },
}));

export const Navigation = (props) => {
  const { breadcrumbs } = props;
  const classes = useStyles();

  const goHome = (event) => {
    props.resetState(data);
  };

  return (
    <div>
      <Toolbar />
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        className={classes.breadcrumbs}
      >
        <Link
          color="textPrimary"
          onClick={goHome}
          style={{ cursor: "pointer" }}
        >
          My Drive
        </Link>
        {breadcrumbs.map((obj, index) => {
          if (index === breadcrumbs.length - 1) {
            return <Typography className={classes.text}>{obj.file}</Typography>;
          } else {
            return (
              <Link underline="none" color="inherit">
                {obj.file}
              </Link>
            );
          }
        })}
      </Breadcrumbs>
    </div>
  );
};
