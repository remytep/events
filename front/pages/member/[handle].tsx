import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react";
import { Loading, User as UserNext } from '@nextui-org/react';
import axios from "axios"
import { AuthContext } from "../../context/AuthContext";
import { collection, query, where, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

function User() {
    const router = useRouter()
    const { handle } = router.query
    const { user, reload } = useContext(AuthContext);
    const [userInfos, setUserInfos] = useState();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, eventsLoading, error] = useCollection(
        query(collection(db, 'hangout'), where("private", "==", false), where("host", "==", Object(userInfos)["id"] || "")),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    useEffect(() => {
        if (handle && !userInfos) {
            axios.get('/api/user/' + handle)
                .then((res) => {
                    setInterval(() => {
                        setLoading(false)
                    }, 1500);
                    setUserInfos(res.data)
                })
        }
    }, [handle])

    if (value && events.length === 0) {
        value?.docs.map((doc) => {
            let data = doc.data();
            axios
                .get(
                    "https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-openagenda&q=&facet=slug&refine.slug=" + data["event"])
                .then(res => {
                    setEvents((events) => [...events, res.data.records[0]])
                });
        })

    }

    // if (userInfos)
    //     getDoc(userInfos.doc).then((doc) => {
    //         console.log(doc)
    //     })

    if (!loading)
        return (
            <>
                {
                    userInfos ?
                        <>
                            <div style={{ margin: "0 auto" }} className="text-light">
                                <UserNext
                                    size="xl"
                                    className="nextui-user-name"
                                    src={Object(userInfos["doc"]).photoURL?.toString()}
                                    name={`@${handle}`}
                                    description={Object(userInfos["doc"]).presentation?.toString()}
                                />

                                <div>
                                    <h4>{events.length > 0 ? "List of hangouts joined" : "No hangouts joined"}</h4>
                                    {events?.map((event, i) => {
                                        return (
                                            <Link key={i} href={`/event/${Object(event).fields.slug}`}>
                                                <Card css={{ my: "$5", width: "fit-content" }}>
                                                    <Card.Body>
                                                        <img
                                                            style={{ objectFit: "cover" }}
                                                            width={320}
                                                            height={180}
                                                            src={Object(event).fields.image}
                                                            alt="Default Image"
                                                        />
                                                        <h4 style={{ width: "260px" }}>
                                                            Event : {Object(event).fields.title_fr
                                                                ? Object(event).fields.title_fr
                                                                : Object(event).fields.originagenda_title
                                                            }
                                                        </h4>

                                                        <p>{value?.docs[i].data().participants.length + 1} participants</p>
                                                    </Card.Body>

                                                </Card>
                                            </Link>
                                        )

                                    })}
                                </div>

                            </div>

                        </>
                        :
                        <h2 style={{ margin: "0 auto" }} className="text-light">User not found :(</h2>
                }
            </>

        )
    else
        return (
            <Loading size="xl" css={{ margin: "auto auto" }} />
        )

}
export default User