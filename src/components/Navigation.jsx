import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Route } from "react-router-dom";
import data from "../data.json";

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    margin: theme.spacing(2, 0),
    marginLeft: "20%",
    display: "flex",
    justifyContent: "flex-start",
  },
}));

export const Navigation = (props) => {
  const { breadcrumbs } = props;
  const classes = useStyles();

  const goHome = (event) => {
    props.setState(data);
  };

  return (
    <div>
      <Toolbar />
      <Route>
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          className={classes.breadcrumbs}
        >
          <Link color="inherit" onClick={goHome} style={{ cursor: "pointer" }}>
            My Drive
          </Link>
          {breadcrumbs.map((obj, index) => {
            if (index === breadcrumbs.length - 1) {
              return <Typography color="textPrimary">{obj.file}</Typography>;
            } else {
              return <Link color="inherit">{obj.file}</Link>;
            }
          })}
        </Breadcrumbs>
      </Route>
    </div>
  );
};
