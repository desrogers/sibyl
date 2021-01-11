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
  Eye,
  Water,
  ArrowCollapseAll,
} from "mdi-material-ui/";
import React from "react";
import { orange } from "@material-ui/core/colors";

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
    color: orange[300],
    height: "1.2em",
    width: "auto",
    marginRight: "15px",
  },
};

const StyledWeatherSunsetUp = withStyles(sunStyles)(WeatherSunsetUp);
const StyledWeatherSunsetDown = withStyles(sunStyles)(WeatherSunsetDown);

export default function ForecastDetailsTable() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid container direction="column" alignContent="center" spacing={3}>
          <Grid item container direction="row" justify="center" spacing={7}>
            <Grid item>
              <Box className={classes.rowHeader}>
                <StyledWeatherSunsetUp />
                <Typography variant="h6">{"7:34 am"}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className={classes.rowHeader}>
                <StyledWeatherSunsetDown />
                <Typography variant="h6">{"4:34 pm"}</Typography>
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
                  <TableCell align="right">{"59° / 41°"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <WaterOutline className={classes.icon} />
                      {"Humidity"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{"70%"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <ArrowCollapseAll className={classes.icon} />
                      {"Pressure"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{"30.07in"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <WeatherWindy className={classes.icon} />
                      {"Wind Speed"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{"15 mph"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <Water className={classes.icon} />
                      {"Dew Point"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{"39°"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <WeatherSunny className={classes.icon} />
                      {"UV Index"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{"3 of 10"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.rowHeader}>
                      <Eye className={classes.icon} />
                      {"Visibility"}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{"10 mi"}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
