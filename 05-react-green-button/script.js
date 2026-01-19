const App = ({ initialButtonText, initialClassesList }) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText);
    const [classesList, setClassesLis] = React.useState(initialClassesList);

    const onBtnClick = () => {
        setButtonText(`Hello from React ${Math.random()}`);
        setClassesLis("green-btn");
    };

    return (
        <div className="app">
            <button
                className={classesList}
                onClick={onBtnClick}
            >
                {buttonText}
            </button>
        </div>
    );
};

const container = document.querySelector(".app");
const root = ReactDOM.createRoot(container);
root.render(
    <App
        initialButtonText="Click me please"
        initialClassesList=""
    />
);
