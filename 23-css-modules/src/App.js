import "./App.css";
import Info from "./components/Info";

function App() {
    return (
        <div className="App">
            <div className="info">
                <h1>Hello from App component</h1>
                <button>App component button</button>
            </div>
            <Info />
        </div>
    );
}

export default App;
