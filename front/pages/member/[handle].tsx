import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Button, Loading, User as UserNext } from "@nextui-org/react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { collection, query, where, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Member.module.css";
import HangoutCard from "../../components/hangouts/HangoutCard";

function User() {
    const router = useRouter()
    const { handle } = router.query
    const { user, reload } = useContext(AuthContext);
    const [userInfos, setUserInfos] = useState();
    const [events, setEvents] = useState([]);
    const [hosts, setHosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, eventsLoading, error] = useCollection(
        query(collection(db, 'hangout'), where("participants", "array-contains", userInfos?.id || "")),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    useEffect(() => {
        if (handle && !userInfos) {
            axios.get('/api/user/' + handle)
                .then((res) => {
                    setUserInfos(res.data)
                })
        }
    }, [handle])
    useEffect(() => {
        setHosts([]);
        setEvents([]);
        value?.docs.map((doc) => {
            let data = doc.data();
            axios.get('/api/host/' + data["host"])
                .then((res) => {
                    setHosts((hosts) => [...hosts, res.data])
                })
            axios
                .get(
                    "https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-openagenda&q=&facet=slug&refine.slug=" + data["event"])
                .then(res => {
                    setEvents((events) => [...events, res.data.records[0]])
                });
        })
        setInterval(() => {
            setLoading(false)
        }, 1500);
    }, [value])

    if (!loading)
        return (
            <>
                {userInfos ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "0 auto",
                        }}
                    >
                        <div
                            style={{ margin: "0 auto", width: "70vw", maxWidth: "502px" }}
                            className="text-light"
                        >
                            <div className={styles["member-container"]}>
                                <div>
                                    <img
                                        className={styles["member-pic"]}
                                        src={userInfos.doc.photoURL?.toString()}
                                        referrerPolicy="no-referrer"
                                    />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <h2 style={{ margin: "auto 0", height: "min-content", paddingRight: "3vw" }}>
                                            @{userInfos.doc.handle?.toString()}
                                        </h2>
                                        {userInfos.id === user.uid &&
                                            <Button
                                                size="xs"
                                                css={{ m: "auto" }}
                                                auto
                                                onPress={() => router.push("/profile")}
                                            >
                                                Edit
                                            </Button>
                                        }

                                    </div>

                                </div>
                                <p>{userInfos.doc.presentation?.toString()}</p>
                            </div>
                            <h4>
                                {events.length > 0
                                    ? "List of hangouts joined"
                                    : "No hangouts joined"}
                            </h4>
                        </div>

                        <div className={styles["event-grid"]}>
                            {events?.map((event, i) => {
                                console.log(value?.docs[i]?.data())
                                let data = value?.docs[i]?.data();
                                let id = value?.docs[i]?.id;
                                if (!data?.private || (data?.private && data?.participants.includes(user?.uid) && user?.uid === userInfos?.id))
                                    return (
                                        <HangoutCard key={i} id={id} i={i} hosts={hosts} userInfos={userInfos} data={data} event={event} />
                                    );
                            })}
                        </div>
                    </div>
                ) : (
                    <h2 style={{ margin: "0 auto" }} className="text-light">
                        User not found :(
                    </h2>
                )
                }
            </>
        );
    else return <Loading size="xl" css={{ margin: "auto auto" }} />;
}
export default User;
