import React, { useContext, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/Hangout.module.css";
import UserCard from "../../components/hangouts/UserCard";
import { db } from "../../config/firebase";
import { collection, query, where, getDoc, orderBy } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import { Button, Card, Input } from "@nextui-org/react";
import moment from 'moment';
import { AuthContext } from "../../context/AuthContext";
import { FaPaperPlane } from "react-icons/fa";
import { IconButton } from "../../components/Icons/IconButton"
const libraries = ["places"];
function Hangout() {
  const router = useRouter();
  const { user, reload } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const [eventData, setEventData] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
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
    axios
      .get("/api/hangout/" + hangoutId)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setParticipants([...response.data.participants, data?.host]);
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
  }, [hangoutId, participants.length]);

  const sendMessage = () => {
    axios.post("/api/message", { content: message, hangout: hangoutId, sender: user.uid })
      .then((res) => {
        console.log(res);
      })
  }

  const joinHangout = (leave?: boolean) => {
    let newParticipants = [...participants, user?.uid];
    if (Object(data)?.host === user?.uid && leave) {
      return axios.delete("/api/hangout/" + hangoutId)
        .then((res) => {
          router.push("/");
        })
    }
    if (leave) {
      newParticipants = participants.filter(function (value) {
        return value !== user?.uid
      });
    }

    axios.put("/api/hangout", { participants: newParticipants, id: hangoutId })
      .then((res) => {
        console.log(res);
      })
    setParticipants(newParticipants);
  }



  console.log(data)

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <Link href={`/event/${Object(data)?.event}`}>
        {/*         <Image src={eventData?.fields.thumbnail} alt={eventData?.fields.description_fr} /> */}
        <h1 className={styles.title}>{Object(eventData)?.fields?.title_fr}</h1>
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
        <p className={styles.dateRange}>{Object(eventData)?.fields?.daterange_fr}</p>
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
          <p>{Object(eventData)?.fields?.location_name}</p>
        </span>
        {participants?.includes(user?.uid)
          ?
          <Button color="error" css={{ m: 4 }} size="sm" onPress={() => joinHangout(true)}>
            Leave hangout
          </Button>
          :
          <Button css={{ m: 4 }} size="sm" onPress={() => joinHangout(false)}>
            Join hangout
          </Button>
        }

      </div>
      <div className={styles.hangoutInfos}>
        <div className={styles.participants}>
          <UserCard id={Object(data)?.host} host={true} />
          {participants &&
            participants.map((participant) => {
              if (data?.host !== participant)
                return (
                  <UserCard key={participant} id={participant} host={false} />
                )
            }
            )}
        </div>
        <div style={{ width: "100%" }}>
          <div className={styles.hangoutChat}>
            {participants?.includes(user?.uid) ?
              value?.docs.sort((a, b) => a.data().createdAt - b.data().createdAt)
                .map((doc, i) => {
                  let backgroundColor = "#5e617e";
                  let marginLeft = "0";
                  if (doc.data().sender === user.uid) {
                    backgroundColor = "#0072F5";
                    marginLeft = "auto";
                  }
                  return (
                    <Card key={i} css={{ m: 5, p: 15, backgroundColor, minWidth: "150px", w: "fit-content", marginLeft }}>
                      <UserCard key={doc.data().sender} id={doc.data().sender} host={false} />

                      <span style={{ fontSize: "12px" }} className="text-light">{moment(new Date(doc.data().createdAt)).fromNow()}</span>
                      <p className="text-light">{doc.data().content}</p>

                    </Card>

                  )

                }) :
              <p className="text-light">You need to join this hangout to send a message !</p>
            }
          </div>
          <Input
            css={{ w: "95%" }}
            disabled={!participants?.includes(user?.uid) ? true : false}
            label="Send a message"
            placeholder={"Hello world !"}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            contentRight={
              <IconButton
                disabled={!message}
                auto
                size="mysize"
                onPress={sendMessage}>
                <FaPaperPlane />
              </IconButton>

            }
          />
        </div>

      </div>




    </div >
  );
}

export default Hangout;
