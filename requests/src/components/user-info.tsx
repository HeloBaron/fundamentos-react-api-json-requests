import useUser from "../hooks/use-user";
import React from "react";

export default function UserInfo() {
    const { user, userRequestStatus, getUser } = useUser();

    React.useEffect(() => {
        getUser("gus");
    }, [getUser]);

    if (userRequestStatus === "loading") {
        return <div>Loading user</div>;
    }

    return (
        <ul>
            <li>Name:{user?.name}</li>
            <li>Username(id):{user?.id}</li>
        </ul>
    );
}
