import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const ChangeUser = () => {
    const { setUser } = useContext(UserContext);
    const [newUser, setNewUser] = useState();
    return (
        <>
            <input
                value={newUser}
                type="text"
                placeholder="Add new user"
                onChange={(e) => {
                    setNewUser(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    setUser(newUser);
                    setNewUser("");
                }}
            >
                Change User
            </button>
        </>
    );
};

export default ChangeUser;
