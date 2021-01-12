import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { WeatherIcon } from "weather-react-icons";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: 200,
    marginBottom: 60,
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
          <Link
            component={RouterLink}
            to="/details/40.7127,-74.0059/2021-01-10"
            underline="none"
            color="inherit"
          >
            <Grid container direction="column" wrap="nowrap" spacing={5}>
              <Grid
                container
                item
                justify="center"
                direction="row"
                wrap="nowrap"
              >
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
            </Grid>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
