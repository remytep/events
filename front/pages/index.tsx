import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import axios from "axios";

import styles from "../styles/Home.module.css";

import Filters from "../components/Filters/Filters";
import EventsList from "../components/Events/EventsList";
import EventPagination from "../components/Pagination/EventPagination";

export default function Home() {
  const { coords, isGeolocationEnabled, getPosition } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 10000,
  });
  const [distance, setDistance] = useState(500);
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
  });
  const [apiUrl, setApiUrl] = useState("");
  const [results, setResults] = useState(null);
  const [rows, setRows] = useState(4);
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(rows * page);

  useEffect(() => {
    let apiUrl =
      "https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-openagenda&q=&rows=" +
      rows +
      "&start=" +
      start;
    let keywords = "";
    let geodistance = "";
    if (tags.length > 0) {
      tags.forEach((tag) => {
        keywords += "&refine.keywords_fr=" + tag;
      });
    }
    if (JSON.stringify(location) !== "{}") {
      geodistance +=
        "&geofilter.distance=+" +
        location.lat +
        "%2C+" +
        location.lng +
        "%2C" +
        distance;
    }
    console.log(apiUrl + keywords + geodistance);
    setApiUrl(apiUrl + keywords + geodistance);
  }, [distance, tags, location, rows, page, start]);
  //axios
  useEffect(() => {
    if (JSON.stringify(location) !== "{}" && apiUrl !== "") {
      axios
        .get(apiUrl)
        .then((response) => {
          console.log(response.data);
          setResults(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [apiUrl]);
  return (
    <div className={styles.container}>
      <Filters
        tags={tags}
        setTags={setTags}
        location={location}
        setLocation={setLocation}
        distance={distance}
        setDistance={setDistance}
        isGeolocationEnabled={isGeolocationEnabled}
        getPosition={getPosition}
        coords={coords}
      />
      <hr className={styles.separator} />
      <div className={styles.column}>
        <EventsList results={results} />
        <EventPagination
          results={results}
          rows={rows}
          page={page}
          setPage={setPage}
          start={start}
          setStart={setStart}
        />
      </div>
    </div>
  );
}
