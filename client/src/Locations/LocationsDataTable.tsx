import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { DeleteOutline } from "mdi-material-ui";
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
          <TableRow>
            <TableCell>
              <Grid
                container
                item
                direction="column"
                className={classes.locationCell}
              >
                <Typography>Canberra</Typography>
                <Typography>42°</Typography>
              </Grid>
            </TableCell>
            <TableCell align="right">
              <Typography>40</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>53</Typography>
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
