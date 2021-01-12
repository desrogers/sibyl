import React from "react";
import PageContentContainerGrid from "../shared/PageContentContainerGrid";
import PageTemplate from "../shared/PageTemplate";
import DateSelector from "./DateSelector";
import ForecastDetailsTable from "./ForecastDetailsTable";

export default function Details() {
  return (
    <PageTemplate>
      <PageContentContainerGrid>
        <DateSelector />
        <ForecastDetailsTable />
      </PageContentContainerGrid>
    </PageTemplate>
  );
}
