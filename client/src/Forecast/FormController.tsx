/// <reference path="index.d.ts" />
/// <reference path="../Locations/index.d.ts" />

import { LocationObject } from "LocationTypes";
import { ForecastObject } from "ForecastTypes";
import React, { ChangeEvent, useContext, useEffect, useRef } from "react";
import Form from "./Form";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnClickOutside from "react-cool-onclickoutside";
import { geolocated, GeolocatedProps } from "react-geolocated";
import ForecastAPI from "../api";
import { AppContext } from "../context";
import { useHistory, useLocation } from "react-router-dom";
import { pathFinder } from "../utils";
import { Coords } from "../api";

const API = new ForecastAPI();

function FormController(props: GeolocatedProps) {
  const { dispatch } = useContext(AppContext);
  const { pathname } = useLocation();
  const history = useHistory();
  const geolocatedRef = useRef<any>(null);
  const {
    ready,
    value,
    suggestions,
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "initMap",
    debounce: 500,
  });

  const ref = useOnClickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  const handleSelect = ({ description }: any) => () => {
    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => API.getForecast({ lat, lng }))
      .then((response) => {
        const { lat, lon: lng } = response;
        const location = { lat, lng, address: description };
        dispatch({ type: "ADD_SEARCH", payload: location });
        dispatch({ type: "UPDATE_WEATHER", payload: response });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const getLocation = () => {
    if (props.positionError) {
      console.error(props.positionError);
    }
    if (!props.isGeolocationAvailable || !props.isGeolocationEnabled) return;
    if (geolocatedRef.current) geolocatedRef.current.getLocation();
    if (props.coords) {
      const {
        coords: { latitude, longitude },
      } = props;

      history.push(`/forecast/${latitude},${longitude}`);
    }
  };

  useEffect(() => {
    let location: Coords;
    const { coords } = props;
    if (!pathname && !coords) return;

    const path = pathFinder(pathname);
    if (path) {
      const { lat, lng } = path;
      location = { lat, lng };
    } else if (coords) {
      location = {
        lat: coords.latitude,
        lng: coords.longitude,
      };
    } else {
      return;
    }

    Promise.all([getGeocode({ location }), API.getForecast(location)])
      .then((results) => {
        const geocoderResults: google.maps.GeocoderResult[] = results[0];
        const forecastResults: ForecastObject[] = results[1];
        const address: string = geocoderResults[0].formatted_address;
        const locationObj: LocationObject = { address, ...location };

        setValue(address, false);
        dispatch({ type: "ADD_SEARCH", payload: locationObj });
        dispatch({ type: "UPDATE_WEATHER", payload: forecastResults });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.coords, pathname]);

  return (
    <Form
      geolocatedRef={geolocatedRef}
      getLocation={getLocation}
      handleInput={handleInput}
      handleSelect={handleSelect}
      searchInputValue={value}
      searchInputRef={ref}
      suggestions={suggestions}
      ready={ready}
    />
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
})(FormController);
