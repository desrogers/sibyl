import { IconButton, TableCell, withStyles } from "@material-ui/core";
import React from "react";
import LocationsDataTable from "./LocationsDataTable";
import { AddLocationOutlined } from "@material-ui/icons";

const StyledTableCell = withStyles({
  root: {
    paddingRight: 4,
    paddingLeft: 4,
  },
})(TableCell);

export default function RecentSearchessDataTable() {
  return (
    <LocationsDataTable>
      <StyledTableCell>
        <IconButton>
          <AddLocationOutlined color="action" />
        </IconButton>
      </StyledTableCell>
    </LocationsDataTable>
  );
}
