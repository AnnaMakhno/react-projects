import UserContext from "../context/UserContext";
import { useContext } from "react";

const UserInfo = () => {
    const { user } = useContext(UserContext);
    return <h1>{user}</h1>;
};

export default UserInfo;
