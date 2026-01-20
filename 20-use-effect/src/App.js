import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        console.log("Fetching data...");
        fetch("https://jsonplaceholder.typicode.com/todos/5")
            .then((response) => response.json())
            .then((json) => setTodo(json));
    }, []);
    console.log("Component rendered");

    return (
        <div className="App">
            <h1>Todo Item</h1>
            <h3>{todo ? todo.title : "Loading..."}</h3>
        </div>
    );
}

export default App;
