import { Box, styled } from "@material-ui/core";
import React from "react";
import PageContentContainerGrid from "../shared/PageContentContainerGrid";
import PageTemplate from "../shared/PageTemplate";
import DateSelector from "./DateSelector";
import ForecastDetailsTable from "./ForecastDetailsTable";

const Spacer = styled(Box)({
  height: 60,
});

export default function Details() {
  return (
    <PageTemplate>
      <Spacer />
      <PageContentContainerGrid>
        <DateSelector />
        <ForecastDetailsTable />
      </PageContentContainerGrid>
    </PageTemplate>
  );
}
