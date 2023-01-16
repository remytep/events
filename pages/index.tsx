import styles from "../styles/Home.module.css";

import React, { useEffect, useState } from "react";

import Filters from "../components/Filters/Filters";
import EventsList from "../components/Events/EventsList";
import axios from "axios";

export default function Home() {
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState({});
  //axios
  useEffect(() => {
    if (JSON.stringify(location) !== "{}") {
      axios
        .get(
          "https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-openagenda"
        )
        .then((response) => console.log(response.data.records))
        .catch((error) => console.log(error));
    }
  }, [location]);
  return (
    <div className={styles.container}>
      <Filters
        tags={tags}
        setTags={setTags}
        location={location}
        setLocation={setLocation}
      />
      <hr className={styles.separator} />
      <EventsList />
    </div>
  );
}
