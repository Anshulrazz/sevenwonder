import React, { useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";

const PlaceComponent = () => {
  const inputRef = useRef();

  const handlePlaceChanged = () => {
    const place = inputRef.current.getPlaces();
    if (place && place.length > 0) {
      console.log(place[0]);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
      libraries={["places"]}
    >
      <StandaloneSearchBox
        onLoad={(ref) => {
          inputRef.current = ref;
        }}
        onPlacesChanged={handlePlaceChanged}
      >
        <input
          type="text"
          placeholder="Search for a place"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipsis`,
          }}
        />
      </StandaloneSearchBox>
    </LoadScript>
  );
};

export default PlaceComponent;
