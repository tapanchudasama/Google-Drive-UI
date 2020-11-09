import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs, Divider, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Route, Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    margin: theme.spacing(2, 0),
    marginLeft: "20%",
    display: "flex",
    justifyContent: "flex-start",
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export const Navigation = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Toolbar />
      <Route>
        {({ location }) => {
          debugger;
          const pathnames = location.pathname.split("/").filter((x) => x);
          return (
            <Breadcrumbs
              separator="›"
              aria-label="breadcrumb"
              className={classes.breadcrumbs}
            >
              <RouterLink color="inherit" to="/">
                My Drive
              </RouterLink>
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                return last ? (
                  <Typography color="textPrimary" key={to}>
                    {value}
                  </Typography>
                ) : (
                  <RouterLink color="inherit" to={to} key={to}>
                    {value}
                  </RouterLink>
                );
              })}
              {/* <Link color="inherit" href="/" onClick={handleClick}>
                Material-UI
              </Link>
              <Link
                color="inherit"
                href="/getting-started/installation/"
                onClick={handleClick}
              >
                Core
              </Link>
              <Typography color="textPrimary">Breadcrumb</Typography> */}
            </Breadcrumbs>
          );
        }}
      </Route>
    </div>
  );
};
