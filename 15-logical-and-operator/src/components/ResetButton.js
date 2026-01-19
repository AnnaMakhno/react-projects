function ResetButton({ onClick }) {
    const buttonResetStyle = {
        backgroundColor: "lightgreen",
    };
    return (
        <div>
            <button
                style={buttonResetStyle}
                onClick={onClick}
            >
                Reset
            </button>
        </div>
    );
}

export default ResetButton;
