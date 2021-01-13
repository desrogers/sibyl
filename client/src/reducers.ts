/// <reference path="Forecast/index.d.ts" />
/// <reference path="Locations/index.d.ts" />

import { ForecastObject } from "ForecastTypes";
import { LocationObject } from "LocationTypes";

export type Action =
  | { type: "ADD"; payload: LocationObject }
  | { type: "DELETE"; payload: LocationObject };

export const weatherReducer = (state: ForecastObject) => state;

export const locationReducer = (state: LocationObject[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return [
        ...state.filter(
          (location) => location.address !== action.payload.address
        ),
      ];
    default:
      return state;
  }
};
export const searchReducer = (state: LocationObject[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return [
        ...state.filter(
          (location) => location.address !== action.payload.address
        ),
      ];
    default:
      return state;
  }
};
