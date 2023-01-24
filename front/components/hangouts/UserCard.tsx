import React, { useState, useEffect } from "react";
import { Loading, Image, User as UserNext } from "@nextui-org/react";
import axios from "axios";

function UserCard({ id, host }) {
  const [userInfos, setUserInfos] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (id) {
      axios
        .get("/api/host/" + id)
        .then((res) => {
          setInterval(() => {
            setLoading(false);
          }, 1500);
          console.log(res.data.doc);
          setUserInfos(res.data.doc);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  if (!loading)
    return (
      <>
        {userInfos ? (
          <>
            <div style={{ margin: "0 auto" }} className="text-light">
              <UserNext
                size="xl"
                className="nextui-user-name"
                src={Object(userInfos).photoURL?.toString()}
                name={`@${userInfos.handle}`}
                description={host ? "Host" : ""}
              />
            </div>
          </>
        ) : null}
      </>
    );
  else return <Loading size="xl" css={{ margin: "auto auto" }} />;
}

export default UserCard;
