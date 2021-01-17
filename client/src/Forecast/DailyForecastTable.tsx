/// <reference path="Forecast/index.d.ts" /

import {
  Box,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  Paper,
  makeStyles,
  TableRow,
  IconButton,
  Collapse,
  Link,
  Button,
} from "@material-ui/core";
import { WeatherIcon } from "weather-react-icons";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Link as RouterLink } from "react-router-dom";
import React, { useState, useContext } from "react";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import { Daily } from "ForecastTypes";
import { AppContext } from "../context";
const d2d = require("degrees-to-direction");

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  weatherIcon: {
    marginRight: 7,
  },
  collapseRow: { display: "flex", justifyContent: "center" },
});

const transformForecastData = (day: Daily, idx: number) => {
  const { temp, pop, wind_speed, wind_deg } = day;
  const date = addDays(new Date(), idx);
  let relativeDate = format(date, "EEEE");

  if (idx === 0) {
    relativeDate = "Today";
  } else if (idx === 1) {
    relativeDate = "Tomorrow";
  }
  return {
    date: {
      relative: relativeDate,
      formatted: format(date, "yyyy-MM-dd"),
    },
    temp: `${Math.floor(temp.max)}° / ${Math.floor(temp.min)}°`,
    precipProb: `${pop * 100}%`,
    wind: `${d2d(wind_deg)} ${Math.floor(wind_speed)} mph`,
  };
};

export default function DailyForecastTable() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const {
    state: { forecast },
  } = useContext(AppContext);
  const { daily = [], lat = 0, lon = 0 } = forecast;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="daily forecast table">
        <TableBody>
          {daily.map((day, idx) => {
            const { date, temp, precipProb, wind } = transformForecastData(
              day,
              idx
            );

            return (
              <>
                <TableRow>
                  <TableCell>{date.relative}</TableCell>
                  <TableCell>{temp}</TableCell>
                  <TableCell>
                    <Box>
                      <WeatherIcon
                        iconId={day.weather[0].id}
                        name="owm"
                        className={classes.weatherIcon}
                      />
                      {day.weather[0].main}
                    </Box>
                  </TableCell>
                  <TableCell align="center">{precipProb}</TableCell>
                  <TableCell align="right">{wind}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <Box padding={2} className={classes.collapseRow}>
                        <Link
                          component={RouterLink}
                          to={`/details/${lat},${lon}/${date.formatted}`}
                          underline="none"
                        >
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                          >
                            More Details
                          </Button>
                        </Link>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
