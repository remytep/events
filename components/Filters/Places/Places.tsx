import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import styles from "./Places.module.css";

const libraries = ["places"];

export default function Places({ location, setLocation }) {
  const [center, setCenter] = useState(
    useMemo(() => ({ lat: 48.856922, lng: 2.349014 }), [])
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Map
      center={center}
      setCenter={setCenter}
      location={location}
      setLocation={setLocation}
    />
  );
}

function Map({ center, setCenter, location, setLocation }) {
  const [selected, setSelected] = useState(null);
  return (
    <div className={styles.googlemap}>
      <div className={styles.placesContainer}>
        <PlacesAutocomplete
          setSelected={setSelected}
          setCenter={setCenter}
          location={location}
          setLocation={setLocation}
        />
      </div>
      {JSON.stringify(location) !== "{}" ? (
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName={styles.mapContainer}
          options={{
            controlSize: 30,
            keyboardShortcuts: false,
            clickableIcons: false,
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
          }}
        >
          {selected && <Marker position={selected} />}
        </GoogleMap>
      ) : null}
    </div>
  );
}

const PlacesAutocomplete = ({
  setSelected,
  setCenter,
  location,
  setLocation,
}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    const results = await getGeocode({ address });
    /*     console.log(results[0].address_components); */

    results[0].address_components.forEach((component) => {
      location[component.types[0]] = component.long_name;
    });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    location["lat"] = lat;
    location["lng"] = lng;
    setCenter({ lat, lng });
    setLocation(location);
    console.log(location);
  };

  return (
    <Combobox onSelect={handleSelect}>
      <div className={styles.locationInput}>
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          className={styles.comboboxInput}
          placeholder="Enter a location"
        />
        <span className={styles.geolocationButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="map-pin"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
