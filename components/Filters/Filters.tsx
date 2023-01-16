import React, { useRef, useState } from "react";
/* import { usePlacesWidget } from "react-google-autocomplete"; */
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";

import Places from "./Places/Places";
import styles from "./Filters.module.css";

function Filters({ tags, setTags, location, setLocation }) {
  return (
    <div className={styles.filters}>
      <Places location={location} setLocation={setLocation} />
      <Autocomplete
        sx={{
          backgroundColor: "white",
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
    </div>
  );
}

export default Filters;
