import { Box, Grid, IconButton, styled } from "@material-ui/core";
import Header from "../shared/Header";
import React from "react";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";

const Wrapper = styled(Box)({
  marginTop: 60,
  marginBottom: 60,
});

export default function DateSelector() {
  return (
    <Wrapper>
      <Grid
        container
        wrap="nowrap"
        justify="center"
        alignItems="center"
        spacing={4}
        direction="row"
      >
        <Grid item>
          <IconButton>
            <ArrowBackIosRounded />
          </IconButton>
        </Grid>
        <Grid item>
          <Header>Jan 10, 2021</Header>
        </Grid>
        <Grid item>
          <IconButton>
            <ArrowForwardIosRounded />
          </IconButton>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
