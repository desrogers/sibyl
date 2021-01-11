import React from "react";
import Page from "../Page";
import Hero from "../Hero";
import "./index.css";
import CurrentWeatherCard from "../CurrentWeatherCard";
import DailyForecastTable from "../DailyForecastTable";
import PageContentContainerGrid from "../PageContentContainerGrid";
import Form from "../Form";

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
