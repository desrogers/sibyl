import {
  Box,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  Paper,
  makeStyles,
  TableRow,
} from "@material-ui/core";
import { WeatherIcon } from "weather-react-icons";
import React from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  weatherIcon: {
    marginRight: 7,
  },
});

export default function DailyForecastTable() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="daily forecast table">
        <TableBody>
          <TableRow>
            <TableCell>{"01/03"}</TableCell>
            <TableCell align="center">{"59°/37°"}</TableCell>
            <TableCell>
              <Box>
                <WeatherIcon
                  iconId={701}
                  name="owm"
                  className={classes.weatherIcon}
                />
                {"Cloudy"}
              </Box>
            </TableCell>
            <TableCell align="center">{"25%"}</TableCell>
            <TableCell align="right">{"NW 14 mph"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
