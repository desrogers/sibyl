import { LocationObject } from "LocationTypes";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { Recents, SavedLocations } from "../storage";
import Locations from "./Locations";

export default function LocationController() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (state.locations.length || state.searches.length) return;
    const results = Promise.all([Recents.isEmpty(), SavedLocations.isEmpty()]);
    results.then((array: boolean[]) => {
      console.log({ array });
      if (array[0] === false) {
        Recents.getItems().then((value: void | LocationObject[]) =>
          dispatch({ type: "ADD_SEARCHES", payload: value })
        );
      }

      if (array[1] === false) {
        SavedLocations.getItems().then((value: void | LocationObject[]) =>
          dispatch({ type: "ADD_LOCATIONS", payload: value })
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Locations />
    </>
  );
}
