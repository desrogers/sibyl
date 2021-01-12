import React from "react";
import Page from "../shared/PageTemplate";
import Hero from "./Hero";
import CurrentWeatherCard from "./CurrentWeatherCard";
import DailyForecastTable from "./DailyForecastTable";
import PageContentContainerGrid from "../shared/PageContentContainerGrid";
import Form from "./Form";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";

export default function Forecast() {
  return (
    <Page>
      <Hero />
      <Form />
      <PageContentContainerGrid>
        <Link
          component={RouterLink}
          underline="none"
          to="/details/40.7127,-74.0059/2020-01-10"
        >
          <CurrentWeatherCard />
        </Link>
        <DailyForecastTable />
      </PageContentContainerGrid>
    </Page>
  );
}
