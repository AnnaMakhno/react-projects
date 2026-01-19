import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(10);
    const incrementCount = () => {
        setCount(count + 1);
    };
    return (
        <div className="App">
            <Counter count={count} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
            <Button onClick={incrementCount} />
        </div>
    );
}

export default App;
