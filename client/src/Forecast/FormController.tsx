import React, { ChangeEvent, useRef } from "react";
import Form from "./Form";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnClickOutside from "react-cool-onclickoutside";
import { geolocated, GeolocatedProps } from "react-geolocated";

function FormController(props: GeolocatedProps) {
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

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const getLocation = () => {
    // TODO: enable proper reverse geocoding
    // if (!props.isGeolocationAvailable || !props.isGeolocationEnabled) return;

    // if (geolocatedRef.current) geolocatedRef.current.getLocation();

    // if (
    //   typeof props.coords?.latitude !== "number" ||
    //   typeof props.coords?.longitude !== "number"
    // ) {
    //   return;
    // }

    // const location = {
    //   lat: props.coords?.latitude,
    //   lng: props.coords?.longitude,
    // };

    const location = {
      lat: 37.7910114,
      lng: -122.4033693,
    };

    getGeocode({ location })
      .then((results) => {
        setValue(results[0].formatted_address, false);
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

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

export default geolocated()(FormController);
