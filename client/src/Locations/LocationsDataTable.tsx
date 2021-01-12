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
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const useStyles = makeStyles({
  locationCell: {
    width: 300,
  },
  buttonCell: {
    paddingLeft: 4,
  },
});

export default function LocationDataTable({ children }: Props) {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow hover>
            <TableCell>
              <Link
                component={RouterLink}
                to="/forecast/40.7127,-74.0059"
                underline="none"
                color="inherit"
              >
                <Box className={classes.locationCell}>
                  <Typography>Pearland</Typography>
                </Box>
              </Link>
            </TableCell>
            {children}
            <TableCell align="right" className={classes.buttonCell}>
              <IconButton>
                <DeleteOutline color="action" />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
