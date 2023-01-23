import { useState, useMemo, useEffect } from "react";
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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "../../../styles/Places.module.css";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

const libraries = ["places"];
const distanceArray = [500, 1000, 2000, 3000, 4000, 5000, 10000];

export default function Places({
  location,
  setLocation,
  distance,
  setDistance,
  isGeolocationEnabled,
  getPosition,
  coords,
}) {
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
      distance={distance}
      setDistance={setDistance}
      isGeolocationEnabled={isGeolocationEnabled}
      getPosition={getPosition}
      coords={coords}
    />
  );
}

function Map({
  center,
  setCenter,
  location,
  setLocation,
  distance,
  setDistance,
  isGeolocationEnabled,
  getPosition,
  coords,
}) {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    if (coords) {
      {
        setLocation({
          lat: coords.latitude,
          lng: coords.longitude,
        });
        setCenter({
          lat: coords.latitude,
          lng: coords.longitude,
        });
        setSelected({
          lat: coords.latitude,
          lng: coords.longitude,
        });
      }
    }
  }, [coords]);
  return (
    <div className={styles.googlemap}>
      <div className={styles.placesContainer}>
        <PlacesAutocomplete
          setSelected={setSelected}
          setCenter={setCenter}
          location={location}
          setLocation={setLocation}
          isGeolocationEnabled={isGeolocationEnabled}
          getPosition={getPosition}
          coords={coords}
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
          <FormControl
            className={styles.select}
            sx={{ position: "absolute", width: "auto" }}
            size="small"
          >
            <Select
              value={distance}
              sx={{ ".MuiOutlinedInput-root": { border: 0 } }}
              onChange={(e) => {
                setDistance(e.target.value);
                console.log(e.target.value);
              }}
            >
              {distanceArray.map((obj) => (
                <MenuItem key={obj} value={obj}>
                  {obj < 1000 ? obj + " m" : obj / 1000 + " km"}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
  getPosition,
  isGeolocationEnabled,
  coords,
}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  const [displayError, setDisplayError] = useState(false);
  const [geolocated, setGeolocated] = useState(true);
  const handleSelect = async (address) => {
    setValue(address, false);
    setGeolocated(false);
    clearSuggestions();
    const results = await getGeocode({ address });
    /*     console.log(results[0].address_components); */
    location = {};
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
  const handleGeolocate = async () => {
    console.log(isGeolocationEnabled);
    if (isGeolocationEnabled) {
      setGeolocated(true);
      await getPosition();
      setDisplayError(false);
      if (coords) {
        location = {};
        location["lat"] = coords.latitude;
        location["lng"] = coords.longitude;
        setLocation(location);
        setCenter(location);
        setSelected(location);
        setValue("");
      }
    } else {
      setDisplayError(true);
    }
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
        {coords ? (
          <span className={styles.geolocationButton} onClick={handleGeolocate}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={geolocated ? "#317FFF" : "#000000"}
              className="map-pin"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        ) : null}
      </div>
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
      {displayError ? (
        <p className={styles.error}>
          Geolocation is not enabled on your browser
        </p>
      ) : null}
    </Combobox>
  );
};
