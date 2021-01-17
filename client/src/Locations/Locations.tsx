import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Header from "../shared/Header";
import PageContentContainerGrid from "../shared/PageContentContainerGrid";
import PageTemplate from "../shared/PageTemplate";
import LocationsDataTable from "./LocationsDataTable";
import RecentSearchessDataTable from "./RecentSearchesDataTable";

const useStyles = makeStyles({
  tableHeading: {
    textAlign: "left",
    margin: "2.6em 0 0.8em",
    color: "grey",
  },
});

export default function Locations() {
  const classes = useStyles();

  return (
    <PageTemplate>
      <Header>Locations</Header>
      <PageContentContainerGrid>
        <Grid item>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            className={classes.tableHeading}
          >
            Saved
          </Typography>
          <LocationsDataTable />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            className={classes.tableHeading}
          >
            Recent Searches
          </Typography>
          <RecentSearchessDataTable />
        </Grid>
      </PageContentContainerGrid>
    </PageTemplate>
  );
}
