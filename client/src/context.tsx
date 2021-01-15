/// <reference path="Forecast/index.d.ts" />
/// <reference path="Locations/index.d.ts" />

import { ForecastObject } from "ForecastTypes";
import { LocationObject } from "LocationTypes";
import React, { createContext, useReducer } from "react";
import {
  weatherReducer,
  locationReducer,
  searchReducer,
  WeatherAction,
  LocationAction,
  SearchAction,
} from "./reducers";

type State = {
  locations: LocationObject[];
  searches: LocationObject[];
  forecast: ForecastObject;
};

type Store = {
  state: State;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  locations: [],
  searches: [],
  forecast: {} as ForecastObject,
};

const AppContext = createContext<Store>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { forecast, locations, searches }: State,
  action: WeatherAction | LocationAction | SearchAction
): State => ({
  forecast: weatherReducer(forecast, action),
  locations: locationReducer(locations, action),
  searches: searchReducer(searches, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
