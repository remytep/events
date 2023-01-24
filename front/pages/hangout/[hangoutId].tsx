import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useRouter } from "next/router";
import styles from "../../styles/Hangout.module.css";
import UserCard from "../../components/hangouts/UserCard";
import { db } from "../../config/firebase";
import { collection, query, where, getDoc } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import { Card, User } from "@nextui-org/react";
import axios from "axios";
import moment from 'moment';

const libraries = ["places"];
function Hangout() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [senders, setSenders] = useState([]);

  const { hangoutId } = router.query;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [value, loading, error] = useCollection(
    query(collection(db, 'message'), where("hangout", "==", String(hangoutId))),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  useEffect(() => {
    value?.docs.map((doc) => {
      let data = doc.data();
      axios.get('/api/host/' + data["sender"])
        .then((res) => {
          setSenders((senders) => [...senders, res.data])
        })
    })
  }, [value])

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
      </div>
      <div className={styles.hangoutChat}>
        {value?.docs.map((doc, i) => {
          console.log(doc.data().createdAt)
          return (
            <Card css={{ backgroundColor: "black", minWidth: "150px", w: "fit-content" }}>
              <User
                src={senders[i]?.doc.photoURL}
                name={senders[i]?.doc.handle}
              />
              <p className="text-light">{doc.data().content}</p>
              <p className="text-light">{moment(new Date(doc.data().createdAt.seconds)).fromNow()}</p>

            </Card>

          )

        })}
      </div>

    </div>
  );
}

export default Hangout;
