import React, { ChangeEvent } from "react";
import Form from "./Form";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnClickOutside from "react-cool-onclickoutside";

export default function FormController() {
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
      .then((results) => {
        console.log("Results: ", results);
        return getLatLng(results[0]);
      })
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  return (
    <Form
      suggestions={suggestions}
      handleInput={handleInput}
      handleSelect={handleSelect}
      searchInputValue={value}
      searchInputRef={ref}
      ready={ready}
    />
  );
}
