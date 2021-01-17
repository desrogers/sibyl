import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  addDays,
  differenceInDays,
  format,
  isAfter,
  isYesterday,
  parse,
  subDays,
} from "date-fns";
import { AppContext } from "../context";
import PageContentContainerGrid from "../shared/PageContentContainerGrid";
import PageTemplate from "../shared/PageTemplate";
import DateSelector from "./DateSelector";
import ForecastDetailsTable from "./ForecastDetailsTable";
import { Daily } from "ForecastTypes";

const generatePrevNextDates = (fromDate: string) => {
  const current = parse(fromDate, "yyyy-MM-dd", new Date());
  const prev = subDays(current, 1);
  const next = addDays(current, 1);
  const frmt = (s: Date | number) => format(s, "yyyy-MM-dd");

  return {
    next: !isAfter(next, addDays(new Date(), 7)) && frmt(next),
    prev: !isYesterday(prev) && frmt(prev),
    current: format(current, "MMM d, y"),
  };
};

function findForecast(current: string, arr: Daily[]) {
  const date = parse(current, "yyyy-MM-dd", new Date());
  const idx = differenceInDays(new Date(), date);
  return arr[idx] || [];
}

export default function Details() {
  const {
    state: {
      forecast: { daily },
    },
  } = useContext(AppContext);
  const { pathname } = useLocation();
  const [, , latlng, date] = pathname.split("/");
  const dates = generatePrevNextDates(date);
  const data = findForecast(date, daily);
  return (
    <PageTemplate>
      <PageContentContainerGrid>
        <DateSelector dates={dates} latlng={latlng} />
        <ForecastDetailsTable data={data} />
      </PageContentContainerGrid>
    </PageTemplate>
  );
}
