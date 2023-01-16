import React from "react";
import axios from "axios";
import styles from "./EventsList.module.css";

function EventsList() {
  return (
    <div className={styles.events}>
      <h1 className={styles.title}>Events</h1>
    </div>
  );
}

export default EventsList;
