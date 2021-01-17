import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  addDays,
  differenceInDays,
  format,
  isAfter,
  isToday,
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
  const idx = isToday(date) ? 0 : differenceInDays(date, new Date()) + 1;
  console.log("fore", idx);
  return arr[idx];
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
  const [data, setData] = useState({} as Daily);
  useEffect(() => {
    const forecast = findForecast(date, daily);
    setData(forecast);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <PageTemplate>
      <PageContentContainerGrid>
        <DateSelector dates={dates} latlng={latlng} />
        {data.dt && <ForecastDetailsTable data={data} />}
      </PageContentContainerGrid>
    </PageTemplate>
  );
}
