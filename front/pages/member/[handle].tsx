import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react";
import { Loading, Image, User as UserNext } from '@nextui-org/react';
import axios from "axios"
import { AuthContext } from "../../context/AuthContext";

function User() {
    const router = useRouter()
    const { handle } = router.query
    const { user, reload } = useContext(AuthContext);
    const [userInfos, setUserInfos] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (handle) {
            axios.get('/api/user/' + handle)
                .then((res) => {
                    setInterval(() => {
                        setLoading(false)
                    }, 1500);
                    setUserInfos(res.data)
                })
        }
    }, [handle])

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
                                    src={Object(userInfos).photoURL?.toString()}
                                    name={`@${handle}`}
                                    description={Object(userInfos).presentation?.toString()}
                                />
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