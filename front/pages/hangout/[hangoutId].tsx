import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/Hangout.module.css";

import UserCard from "../../components/Hangouts/UserCard";

const libraries = ["places"];
function Hangout() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const { hangoutId } = router.query;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  useEffect(() => {
    axios
      .get("/api/hangout/" + hangoutId)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setParticipants(response.data.participants);
        axios
          .get(
            "https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-openagenda&q=&facet=slug&refine.slug=" +
              response.data.event
          )
          .then((response) => {
            console.log(response.data.records[0]);
            setEventData(response.data.records[0]);
            setCenter({
              lat: response.data.records[0].geometry.coordinates[1],
              lng: response.data.records[0].geometry.coordinates[0],
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [hangoutId]);
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <Link href={`/event/${data?.event}`}>
        {/*         <Image src={eventData?.fields.thumbnail} alt={eventData?.fields.description_fr} /> */}
        <h1 className={styles.title}>{eventData?.fields.title_fr}</h1>
      </Link>
      <GoogleMap
        zoom={14}
        mapContainerClassName={styles.mapContainer}
        center={center}
        options={{
          controlSize: 30,
          keyboardShortcuts: false,
          clickableIcons: false,
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
      <div className={styles.eventInfos}>
        <p className={styles.dateRange}>{eventData?.fields.daterange_fr}</p>
        <span className={styles.locationName}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
            className="map-pin"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <p>{eventData?.fields.location_name}</p>
        </span>
      </div>
      <div className={styles.hangoutInfos}>
        <div className={styles.participants}>
          <UserCard id={data.host} host={true} />
          {participants &&
            participants.map((participant) => (
              <UserCard key={participant} id={participant} host={false} />
            ))}
        </div>
        <div className={styles.hangoutChat}></div>
      </div>
    </div>
  );
}

export default Hangout;
