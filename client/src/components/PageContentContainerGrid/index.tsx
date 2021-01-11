import { Container, Grid } from "@material-ui/core";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PageContentContainerGrid({ children }: Props) {
  return (
    <main>
      <Container>
        <Grid container justify="center">
          <Grid item></Grid>
          <Grid item container xs={8} direction="column" alignContent="center">
            {children}
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </main>
  );
}
