import React, { useRef, useState } from "react";
/* import { usePlacesWidget } from "react-google-autocomplete"; */
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";

import Places from "./Places/Places";
import styles from "../../styles/Filters.module.css";

function Filters({
  tags,
  setTags,
  location,
  setLocation,
  distance,
  setDistance,
  isGeolocationEnabled,
  getPosition,
  coords,
}) {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className={styles.filters}>
      <Places
        location={location}
        setLocation={setLocation}
        distance={distance}
        setDistance={setDistance}
        isGeolocationEnabled={isGeolocationEnabled}
        getPosition={getPosition}
        coords={coords}
      />
      {showFilters ? (
        <>
          <Autocomplete
            sx={{
              backgroundColor: "white",
              marginBottom: "10px",
              border: "1px solid gray",
              minHeight: "3rem",
              borderRadius: "5px",
              "& fieldset": {
                border: "none",
              },
              "& .MuiOutlinedInput-root": {
                padding: "0",
              },
            }}
            multiple
            freeSolo
            options={[]}
            value={tags}
            onChange={(event, newValue) => {
              console.log(newValue);
              setTags(newValue);
            }}
            filterSelectedOptions
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                  style: {
                    height: "2rem",
                    padding: "0.5rem",
                    lineHeight: "2rem",
                    color: "gray",
                    verticalAlign: "center",
                  },
                }}
                multiline
                placeholder="Enter a keyword"
              />
            )}
          />
          <div className={styles.filtersButton}>
            <span>- </span>
            <p
              onClick={() => {
                setShowFilters(false);
                setTags([]);
              }}
              className={styles.addFilters}
            >
              hide filters
            </p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.filtersButton}>
            <span>+ </span>
            <p
              onClick={() => setShowFilters(true)}
              className={styles.addFilters}
            >
              add filters
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Filters;
