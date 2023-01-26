import { Card } from "@nextui-org/react";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function HangoutCard({ id, userInfos = null, hosts, event, data, i }) {

    const { user, reload } = useContext(AuthContext);

    return (
        <Link key={i} href={`/hangout/${id}`}>
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
                    {(data?.participants.includes(user?.uid) && (![data?.host, userInfos?.id].includes(user?.uid) || !userInfos)) &&
                        <p>You're already participating.</p>
                    }
                    <p>
                        {(data.participants.length | 0)} participant(s)
                    </p>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default HangoutCard