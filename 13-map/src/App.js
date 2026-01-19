import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import { useState } from "react";

function App() {
    const texts = ["Click me!", "Push me!", "Press me!"];
    const [count, setCount] = useState(10);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const btnArr = texts.map((el, index) => (
        <Button
            text={el}
            onClick={incrementCount}
            key={index}
        />
    ));
    return (
        <div className="App">
            <Counter count={count} />
            {btnArr}
        </div>
    );
}

export default App;
