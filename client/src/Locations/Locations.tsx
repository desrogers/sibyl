import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Header from "../shared/Header";
import PageContentContainerGrid from "../shared/PageContentContainerGrid";
import PageTemplateWithSpacer from "../shared/PageTemplateWithSpacer";
import LocationsDataTable from "./LocationsDataTable";
import RecentSearchessDataTable from "./RecentSearchesDataTable";

const useStyles = makeStyles({
  tableHeading: {
    margin: "2.6em 0 0.8em",
  },
});

export default function Locations() {
  const classes = useStyles();

  return (
    <PageTemplateWithSpacer>
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
          {/* TODO: If no saved Locations don't render table */}
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
    </PageTemplateWithSpacer>
  );
}
