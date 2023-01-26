import { collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../config/firebase";
import axios from "axios";
import HangoutCard from "../../components/hangouts/HangoutCard";

function Hangout() {

    const [events, setEvents] = useState([]);
    const [hosts, setHosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, eventsLoading, error] = useCollection(
        query(collection(db, 'hangout'), where("private", "==", false)),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

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

    return (
        <div className="text-light" style={{ margin: "0 auto" }}>
            <h1>Events</h1>
            <div className="grid">

                {events.map((event, i) => {
                    let data = value?.docs[i]?.data();
                    let id = value?.docs[i]?.id;
                    return (
                        <HangoutCard key={i} id={id} i={i} hosts={hosts} data={data} event={event} />
                    )
                })}
            </div>
        </div>



    )
}
export default Hangout;