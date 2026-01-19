import "./App.css";
import RandomNumber from "./components/RandomNumber";

function App() {
    return (
        <div className="App">
            <RandomNumber
                minNum={0}
                maxNum={20}
            />
            <RandomNumber
                minNum={20}
                maxNum={40}
            />
        </div>
    );
}

export default App;
