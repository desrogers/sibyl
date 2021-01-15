/// <reference path="Forecast/index.d.ts" />
/// <reference path="Locations/index.d.ts" />

import { ForecastObject } from "ForecastTypes";
import { LocationObject } from "LocationTypes";

export type LocationAction =
  | { type: "ADD_LOCATION"; payload: LocationObject }
  | { type: "DELETE_LOCATION"; payload: LocationObject };

export type SearchAction =
  | { type: "ADD_SEARCH"; payload: LocationObject }
  | { type: "DELETE_SEARCH"; payload: LocationObject };

export type WeatherAction = { type: "UPDATE_WEATHER"; payload: ForecastObject };
export const weatherReducer = (
  state: ForecastObject,
  action: WeatherAction | LocationAction | SearchAction
) => {
  switch (action.type) {
    case "UPDATE_WEATHER":
      return action.payload;
    default:
      return state;
  }
};

export const locationReducer = (
  state: LocationObject[],
  action: WeatherAction | LocationAction | SearchAction
) => {
  switch (action.type) {
    case "ADD_LOCATION":
      return [...state, action.payload];
    case "DELETE_LOCATION":
      return [
        ...state.filter(
          (location) => location.address !== action.payload.address
        ),
      ];
    default:
      return state;
  }
};
export const searchReducer = (
  state: LocationObject[],
  action: WeatherAction | LocationAction | SearchAction
) => {
  switch (action.type) {
    case "ADD_SEARCH":
      return [action.payload, ...state];
    case "DELETE_SEARCH":
      return [
        ...state.filter(
          (location) => location.address !== action.payload.address
        ),
      ];
    default:
      return state;
  }
};
