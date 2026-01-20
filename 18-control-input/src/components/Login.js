import { useState } from "react";

function Login() {
    const [data, setData] = useState({ username: "", password: "" });

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(data);
        alert(JSON.stringify(data));
    }

    function handleInputChange(text, name) {
        setData({ ...data, [name]: text });
    }
    return (
        <>
            <h1>LoginForm</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input
                        value={data.username}
                        onChange={(e) => {
                            handleInputChange(e.target.value, "username");
                        }}
                        type="text"
                    ></input>
                </label>
                <label>
                    Password:
                    <input
                        value={data.password}
                        onChange={(e) => {
                            handleInputChange(e.target.value, "password");
                        }}
                        type="password"
                    ></input>
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;
