import { AddLocationOutlined } from "@material-ui/icons";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Typography,
  makeStyles,
  IconButton,
  Link,
  withStyles,
} from "@material-ui/core";
import { DeleteOutline } from "mdi-material-ui";
import { Link as RouterLink } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "../context";
import { LocationObject } from "LocationTypes";

const useStyles = makeStyles({
  locationCell: {
    width: 450,
  },
  buttonCell: {
    paddingLeft: 4,
  },
});

const StyledTableCell = withStyles({
  root: {
    paddingRight: 4,
    paddingLeft: 4,
  },
})(TableCell);

export default function RecentSearchessDataTable() {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const { searches } = state;

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {searches.length
            ? searches.map((loc: LocationObject, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Link
                      component={RouterLink}
                      to={`/forecast/${loc.lat},${loc.lng}`}
                      underline="none"
                      color="inherit"
                    >
                      <Box className={classes.locationCell}>
                        <Typography>{loc.address}</Typography>
                      </Box>
                    </Link>
                  </TableCell>
                  <StyledTableCell>
                    <IconButton
                      onClick={() =>
                        dispatch({ type: "ADD_LOCATION", payload: loc })
                      }
                    >
                      <AddLocationOutlined color="action" />
                    </IconButton>
                  </StyledTableCell>
                  <TableCell align="right" className={classes.buttonCell}>
                    <IconButton
                      onClick={() =>
                        dispatch({ type: "DELETE_SEARCH", payload: loc })
                      }
                    >
                      <DeleteOutline color="action" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
