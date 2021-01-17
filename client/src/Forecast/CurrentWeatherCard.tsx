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
import React, { useContext } from "react";
import { AppContext } from "../context";
import { format } from "date-fns";

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: 188,
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
    fontSize: "1.5rem",
  },
  subtext: {
    fontSize: "1.3rem",
  },
  icon: {
    fontSize: "6rem",
  },
});

const getDetailsPathString = ({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}): string => {
  const date = format(new Date(), "yyyy-MM-dd");

  return `/details/${lat},${lng}/${date}`;
};

export default function CurrentWeatherCard() {
  const classes = useStyles();
  const { state } = useContext(AppContext);
  const {
    forecast: { current: { temp = 0, feels_like = 0, weather = [] } = {} } = {},
    searches: [latest],
  } = state;
  const path =
    latest && getDetailsPathString({ lat: latest?.lat, lng: latest?.lng });

  return (
    <Card raised className={classes.root}>
      <CardContent>
        <Box className={classes.block}>
          <Link
            component={RouterLink}
            to={path || "/"}
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
                      {latest
                        ? latest.address.split(",").slice(-3, -1).join(",")
                        : null}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.tempLarge}>
                      {temp ? `${Math.floor(temp)}°` : null}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.subtext}>
                      {feels_like
                        ? `Feels like ${Math.floor(feels_like)}°`
                        : ""}
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
                    {weather.length ? (
                      <WeatherIcon
                        iconId={weather[0].id}
                        name="owm"
                        className={classes.icon}
                      />
                    ) : null}
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
