import { useState } from "react";
import generateRandomNum from "../utils/generateRandomNum";

function RandomNumber({ minNum, maxNum }) {
    const [randomNum, setRandomNum] = useState(
        generateRandomNum(minNum, maxNum)
    );
    const changeRandomNum = () => {
        setRandomNum(generateRandomNum(minNum, maxNum));
    };
    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>
                Generate new random number
            </button>
        </div>
    );
}

export default RandomNumber;
