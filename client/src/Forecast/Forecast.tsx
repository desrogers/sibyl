import React from "react";
import Page from "../shared/PageTemplate";
import Hero from "./Hero";
import CurrentWeatherCard from "./CurrentWeatherCard";
import DailyForecastTable from "./DailyForecastTable";
import PageContentContainerGrid from "../shared/PageContentContainerGrid";
import FormController from "./FormController";

export default function Forecast() {
  return (
    <Page>
      <Hero />
      <PageContentContainerGrid>
        <FormController />
        <CurrentWeatherCard />
        <DailyForecastTable />
      </PageContentContainerGrid>
    </Page>
  );
}
