import React, { useState, useEffect } from "react";
import { Loading, Image, User as UserNext } from "@nextui-org/react";
import axios from "axios";

function UserCard({ handle }) {
  const [userInfos, setUserInfos] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (handle) {
      axios.get("/api/user/" + handle).then((res) => {
        setInterval(() => {
          setLoading(false);
        }, 1500);
        console.log(res);
        setUserInfos(res.data);
      });
    }
  }, [handle]);

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
                name={`@${handle}`}
                description={Object(userInfos).presentation?.toString()}
              />
            </div>
          </>
        ) : null}
      </>
    );
  else return <Loading size="xl" css={{ margin: "auto auto" }} />;
}

export default UserCard;
