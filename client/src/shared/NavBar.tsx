import React from "react";
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Link } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { NavLink } from "react-router-dom";

const StyledBox = withStyles({
  root: {
    position: "relative",
    width: "100%",
  },
})(Box);

const Nav = styled("nav")({
  height: "100%",
  padding: "0.5em 0",
});

const useStyles = makeStyles({
  navbarBrand: {
    color: grey[800],
    fontSize: "2rem",
    fontWeight: 500,
    textDecoration: "none",
  },
  navbarLink: {
    fontWeight: 300,
    fontSize: "1.3em",
  },
});

export default function AppBar() {
  const classes = useStyles();
  return (
    <StyledBox>
      <Container>
        <Nav>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <Link
                className={classes.navbarBrand}
                component={NavLink}
                to="/"
                underline="none"
              >
                sibyl
              </Link>
            </Grid>
            <Grid item xs={10}></Grid>
            <Grid item>
              <Link
                color="inherit"
                align="right"
                underline="none"
                className={classes.navbarLink}
                component={NavLink}
                to="/locations"
              >
                Locations
              </Link>
            </Grid>
          </Grid>
        </Nav>
      </Container>
    </StyledBox>
  );
}
