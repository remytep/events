import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useRouter } from "next/router";
import styles from "../../styles/Hangout.module.css";

import UserCard from "../../components/hangouts/UserCard";

const libraries = ["places"];
function Hangout() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { slug } = router.query;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Titre de l'event</h1>
      <GoogleMap
        zoom={14}
        mapContainerClassName={styles.mapContainer}
        center={{ lat: 48.856922, lng: 2.349014 }}
        options={{
          controlSize: 30,
          keyboardShortcuts: false,
          clickableIcons: false,
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
        }}
      >
        <Marker position={{ lat: 48.856922, lng: 2.349014 }} />
      </GoogleMap>
      <div className={styles.hangoutInfos}>
        <div className={styles.participants}>
          <UserCard handle={"R2J"} />
          <UserCard handle={"R2J"} />
          <UserCard handle={"R2J"} />
          <UserCard handle={"R2J"} />
        </div>
        <div className={styles.hangoutChat}></div>
      </div>
    </div>
  );
}

export default Hangout;
