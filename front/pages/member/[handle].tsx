import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Loading, User as UserNext } from "@nextui-org/react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { collection, query, where, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Member.module.css";

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
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <img
                                        className={styles["member-pic"]}
                                        src={userInfos.doc.photoURL?.toString()}
                                        referrerPolicy="no-referrer"
                                    />
                                    <h2 style={{ margin: "auto 0", height: "min-content" }}>
                                        @{userInfos.doc.handle?.toString()}
                                    </h2>
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
                                if (!data?.private || (data?.private && data?.host === user.uid))
                                    return (
                                        <Link key={i} href={`/hangout/${value?.docs[i]?.id}`}>
                                            <Card css={{ my: "$5", maxWidth: "502px" }}>
                                                <Card.Body>
                                                    <img
                                                        style={{ width: "100%", objectFit: "cover" }}
                                                        height={180}
                                                        src={Object(event).fields.image}
                                                        alt="Default Image"
                                                    />
                                                    <span style={{ fontSize: "11px" }}>{data?.private ? "Private hangout" : "Public hangout"}</span>
                                                    <span>Hosted by {hosts[i]?.doc?.handle}</span>
                                                    <h4 style={{ width: "260px" }}>
                                                        Event :{" "}
                                                        {Object(event).fields.title_fr
                                                            ? Object(event).fields.title_fr
                                                            : Object(event).fields.originagenda_title}
                                                    </h4>
                                                    {(data?.participants.includes(user?.uid) && data?.host !== user.uid) &&
                                                        <p>You're already participating.</p>
                                                    }
                                                    <p>
                                                        {(value?.docs[i]?.data().participants.length | 0)}{" "}
                                                        participant(s)
                                                    </p>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    );
                            })}
                        </div>
                    </div>
                ) : (
                    <h2 style={{ margin: "0 auto" }} className="text-light">
                        User not found :(
                    </h2>
                )}
            </>
        );
    else return <Loading size="xl" css={{ margin: "auto auto" }} />;
}
export default User;
