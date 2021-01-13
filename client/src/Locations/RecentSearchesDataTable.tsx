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
import React from "react";

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
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Link
                component={RouterLink}
                to="/forecast/40.7127,-74.0059"
                underline="none"
                color="inherit"
              >
                <Box className={classes.locationCell}>
                  <Typography>New York, NY, USA</Typography>
                </Box>
              </Link>
            </TableCell>
            <StyledTableCell>
              <IconButton>
                <AddLocationOutlined color="action" />
              </IconButton>
            </StyledTableCell>
            <TableCell align="right" className={classes.buttonCell}>
              <IconButton>
                <DeleteOutline color="action" />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Link
                component={RouterLink}
                to="/forecast/40.7127,-74.0059"
                underline="none"
                color="inherit"
              >
                <Box className={classes.locationCell}>
                  <Typography>
                    350 Bush St, San Francisco, CA 94104, USA
                  </Typography>
                </Box>
              </Link>
            </TableCell>
            <StyledTableCell>
              <IconButton>
                <AddLocationOutlined color="action" />
              </IconButton>
            </StyledTableCell>
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
