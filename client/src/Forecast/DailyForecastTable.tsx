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
import React, { useState } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  weatherIcon: {
    marginRight: 7,
  },
  collapseRow: { display: "flex", justifyContent: "center" },
});

export default function DailyForecastTable() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="daily forecast table">
        <TableBody>
          <TableRow>
            <TableCell>{"01/03"}</TableCell>
            <TableCell>{"59°/37°"}</TableCell>
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
            <TableCell align="right">
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box padding={2} className={classes.collapseRow}>
                  <Link
                    component={RouterLink}
                    to="/details/40.7127,-74.0059/2021-01-03"
                    underline="none"
                  >
                    <Button variant="outlined" size="small" color="primary">
                      More Details
                    </Button>
                  </Link>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
