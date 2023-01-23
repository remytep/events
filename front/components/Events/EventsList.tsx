import React from "react";
import axios from "axios";
import styles from "../../styles/EventsList.module.css";
import EventCard from "./EventCard";

function EventsList({ results }) {
  return (
    <div className={styles.events}>
      <h1 className={styles.title}>Events</h1>

      {results || JSON.stringify(results) === "[]" ? (
        <div className={styles.results}>
          {results &&
            results.records.map((data, i) => <EventCard key={i} data={data} />)}
        </div>
      ) : (
        <div className={styles.noResults}>
          <p>No Results.</p>
        </div>
      )}
    </div>
  );
}

export default EventsList;
