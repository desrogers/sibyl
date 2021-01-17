import { Box, Grid, IconButton, styled } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../shared/Header";
import React from "react";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";

type Props = {
  dates: {
    prev: string | false;
    next: string | false;
    current: string;
  };
  latlng: string;
};
const Wrapper = styled(Box)({
  marginTop: 60,
  marginBottom: 60,
});

export default function DateSelector({ dates, latlng }: Props) {
  const { current, prev, next } = dates;
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
          <IconButton disabled={!prev}>
            <Link to={`/details/${latlng}/${prev}`}>
              <ArrowBackIosRounded />
            </Link>
          </IconButton>
        </Grid>
        <Grid item>
          <Header>{current}</Header>
        </Grid>
        <Grid item>
          <IconButton disabled={!next}>
            <Link to={`/details/${latlng}/${next}`}>
              <ArrowForwardIosRounded />
            </Link>
          </IconButton>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
