import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { WeatherIcon } from "weather-react-icons";
import React from "react";

const useStyles = makeStyles({
  root: {
    position: "relative",
    top: "-35px",
  },
  row: {
    backgroundColor: "yellow",
  },
  block: {
    display: "flex",
    flexDirection: "column",
  },
  tempLarge: {
    fontSize: "3.4rem",
    fontWeight: 600,
  },
  locality: {
    fontSize: "2rem",
  },
  subtext: {
    fontSize: "1.3rem",
  },
  icon: {
    fontSize: "6rem",
  },
});

export default function CurrentWeatherCard() {
  const classes = useStyles();
  return (
    <Card raised className={classes.root}>
      <CardContent>
        <Box className={classes.block}>
          <Grid container direction="column" wrap="nowrap" spacing={5}>
            <Grid container item justify="center" direction="row" wrap="nowrap">
              <Grid
                container
                item
                alignItems="center"
                direction="column"
                xs={6}
              >
                <Grid item>
                  <Typography className={classes.locality}>
                    Pearland, TX
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.tempLarge}>42°</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.subtext}>
                    Feels like 32°
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={6}
                justify="center"
                alignContent="center"
              >
                <Grid item>
                  <WeatherIcon
                    iconId={200}
                    name="owm"
                    className={classes.icon}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="row"
              justify="space-evenly"
              wrap="nowrap"
            >
              <Grid item>
                <Typography>{"59° -> 41°"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"7:21am - 4:34 pm"}</Typography>
              </Grid>
              <Grid item>
                <Typography>{"Precip: 0%"}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
