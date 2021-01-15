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
import ForecastAPI from "./ForecastAPI";
import { AppContext } from "../context";

const API = new ForecastAPI();

function FormController(props: GeolocatedProps) {
  const { dispatch } = useContext(AppContext);
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

    let location = {
      address: description,
      lat: 0,
      lng: 0,
    };

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        location.lat = lat;
        location.lng = lng;
        return API.getForecast({ lat, lng });
      })
      .then((response) => {
        console.log({ location });
        dispatch({ type: "ADD_SEARCH", payload: location });
        dispatch({ type: "UPDATE_WEATHER", payload: response });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const getLocation = () => {
    // TODO: enable proper reverse geocoding

    if (props.positionError) {
      console.error(props.positionError);
      return;
    }
    if (!props.isGeolocationAvailable || !props.isGeolocationEnabled) return;
    if (geolocatedRef.current) geolocatedRef.current.getLocation();

    if (
      typeof props.coords?.latitude !== "number" ||
      typeof props.coords?.longitude !== "number"
    ) {
      return;
    }

    const location = {
      lat: props.coords?.latitude,
      lng: props.coords?.longitude,
    };

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
  };

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.coords]);

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
