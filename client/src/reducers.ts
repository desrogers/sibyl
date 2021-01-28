/// <reference path="Forecast/index.d.ts" />
/// <reference path="Locations/index.d.ts" />

import { ForecastObject } from "ForecastTypes";
import { LocationObject } from "LocationTypes";
import { Recents, SavedLocations } from "./storage";

export type LocationAction =
  | { type: "ADD_LOCATION"; payload: LocationObject }
  | { type: "ADD_LOCATIONS"; payload: LocationObject[] }
  | { type: "DELETE_LOCATION"; payload: LocationObject };

export type SearchAction =
  | { type: "ADD_SEARCH"; payload: LocationObject }
  | { type: "ADD_SEARCHES"; payload: LocationObject[] }
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
      SavedLocations.add(action.payload).catch((e) => console.error(e));
      return [...state, action.payload];
    case "ADD_LOCATIONS":
      return action.payload;
    case "DELETE_LOCATION":
      SavedLocations.remove(action.payload).catch((e) => console.error(e));
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
      Recents.add(action.payload).catch((e) => console.error(e));
      return [action.payload, ...state];
    case "ADD_SEARCHES":
      return action.payload;
    case "DELETE_SEARCH":
      Recents.remove(action.payload).catch((e) => console.error(e));
      return [
        ...state.filter(
          (location) => location.address !== action.payload.address
        ),
      ];
    default:
      return state;
  }
};
