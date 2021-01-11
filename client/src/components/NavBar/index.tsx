import React from "react";
import { styled, withStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Link } from "@material-ui/core";

const StyledBox = withStyles({
  root: {
    position: "fixed",
    width: "100%",
  },
})(Box);

const Nav = styled("nav")({
  height: "100%",
  padding: "0.5em 0",
});

const NavbarBrandLink = withStyles({
  root: {
    color: "white",
    fontStyle: "oblique",
    fontSize: "2rem",
    fontWeight: 800,
    textDecoration: "none",
  },
})(Link);

export default function AppBar() {
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
              <NavbarBrandLink href="/">sibyl</NavbarBrandLink>
            </Grid>
            <Grid item xs={10}></Grid>
            <Grid item>
              <Link color="inherit" align="right" href="/locations">
                Locations
              </Link>
            </Grid>
          </Grid>
        </Nav>
      </Container>
    </StyledBox>
  );
}
