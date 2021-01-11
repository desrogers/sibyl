import React from "react";
import Page from "../shared/PageTemplate";
import Hero from "./Hero";
import CurrentWeatherCard from "./CurrentWeatherCard";
import DailyForecastTable from "./DailyForecastTable";
import PageContentContainerGrid from "../shared/PageContentContainerGrid";
import Form from "./Form";

export default function LandingPage() {
  return (
    <Page>
      <Hero />
      <Form />
      <PageContentContainerGrid>
        <CurrentWeatherCard />
        <DailyForecastTable />
      </PageContentContainerGrid>
    </Page>
  );
}
