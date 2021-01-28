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
} from "@material-ui/core";
import { DeleteOutline } from "mdi-material-ui";
import { Link as RouterLink } from "react-router-dom";
import React, { useContext } from "react";
import { LocationObject } from "LocationTypes";
import { AppContext } from "../context";

type Props = {
  children?: React.ReactNode;
};

const useStyles = makeStyles({
  locationCell: {
    width: 450,
  },
  buttonCell: {
    paddingLeft: 4,
  },
});

export default function LocationDataTable({ children }: Props) {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const { locations } = state;

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {locations.length
            ? locations.map((loc: LocationObject, i) => (
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
                  {children}
                  <TableCell align="right" className={classes.buttonCell}>
                    <IconButton
                      onClick={() =>
                        dispatch({
                          type: "DELETE_LOCATION",
                          payload: loc,
                        })
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
