import {
  Box,
  Card,
  CardContent,
  Grid,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Typography,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import {
  Thermometer,
  WaterOutline,
  WeatherWindy,
  WeatherSunny,
  WeatherSunsetUp,
  WeatherSunsetDown,
  Water,
  ArrowCollapseAll,
  UmbrellaOutline,
} from "mdi-material-ui/";
import React from "react";
import { orange } from "@material-ui/core/colors";
import { Daily } from "ForecastTypes";
import { format } from "date-fns";

type Props = {
  data: Daily;
};

const useStyles = makeStyles({
  rowHeader: {
    display: "flex",
    alignItems: "flex-end",
    color: "inherit",
    height: "100%",
  },
  icon: {
    height: "0.8em",
    marginRight: "5px",
  },
});

const sunStyles = {
  root: {
    color: orange[500],
    height: "1.2em",
    width: "auto",
    marginRight: "15px",
  },
};

const StyledWeatherSunsetUp = withStyles(sunStyles)(WeatherSunsetUp);
const StyledWeatherSunsetDown = withStyles(sunStyles)(WeatherSunsetDown);

function fmt(data: Daily) {
  const {
    sunrise,
    sunset,
    temp,
    humidity,
    dew_point,
    wind_speed,
    pressure,
    uvi,
    pop,
  } = data;
  const fmtFloorToStr = (n: number, s: string = "") => `${Math.floor(n)}${s}`;

  return {
    sunrise: format(new Date(sunrise * 1000), "p"),
    sunset: format(new Date(sunset * 1000), "p"),
    temp: `${fmtFloorToStr(temp.max, "°")} / ${fmtFloorToStr(temp.min, "°")}`,
    precipProb: fmtFloorToStr(pop, "%"),
    humidity: fmtFloorToStr(humidity, "%"),
    pressure: fmtFloorToStr(pressure, " hPa"),
    windSpeed: fmtFloorToStr(wind_speed, " mph"),
    dew: fmtFloorToStr(dew_point, "°"),
    uvi: fmtFloorToStr(uvi),
  };
}

export default function ForecastDetailsTable({ data }: Props) {
  const classes = useStyles();
  const details = fmt(data);

  return (
    <Card>
      <CardContent>
        <Grid container direction="column" alignContent="center" spacing={3}>
          <Grid item container direction="row" justify="center" spacing={7}>
            <Grid item>
              <Box className={classes.rowHeader}>
                <StyledWeatherSunsetUp />
                <Typography variant="h6">{details.sunrise}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className={classes.rowHeader}>
                <StyledWeatherSunsetDown />
                <Typography variant="h6">{details.sunset}</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid item>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <Thermometer className={classes.icon} />
                      {"Hi / Lo"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{details.temp}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <UmbrellaOutline className={classes.icon} />
                      {"Precip Probability"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{details.precipProb}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <WaterOutline className={classes.icon} />
                      {"Humidity"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{details.humidity}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <ArrowCollapseAll className={classes.icon} />
                      {"Pressure"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{details.pressure}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <WeatherWindy className={classes.icon} />
                      {"Wind Speed"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{details.windSpeed}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <Water className={classes.icon} />
                      {"Dew Point"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{details.dew}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <WeatherSunny className={classes.icon} />
                      {"UV Index"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{details.uvi}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
