/// <reference path="Forecast/index.d.ts" /

import {
  Table,
  TableContainer,
  TableBody,
  Paper,
  makeStyles,
} from "@material-ui/core";

import React, { useContext } from "react";
import { AppContext } from "../context";
import DailyForecastTableRow from "./DailyForecastTableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function DailyForecastTable() {
  const classes = useStyles();
  const {
    state: { forecast },
  } = useContext(AppContext);
  const { daily = [], lat = 0, lon = 0 } = forecast;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="daily forecast table">
        <TableBody>
          {daily.map((day, idx) => (
            <DailyForecastTableRow
              key={idx}
              day={day}
              idx={idx}
              lat={lat}
              lon={lon}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
