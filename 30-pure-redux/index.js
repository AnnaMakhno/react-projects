import store from "./redux/store.js";
import { addCurrentTime, clearAllTimes } from "./redux/actionCreators.js";

// store.subscribe(() => {
//     console.log("Store updated!", store.getState());
// });
// store.dispatch({ type: "ADD_CURRENT_TIME", payload: "2024-06-01 12:00:00" });
// store.dispatch({ type: "ADD_CURRENT_TIME", payload: "2025-07-02 12:00:00" });
// store.dispatch({ type: "CLEAR_CURRENT_TIME" });
// store.dispatch({ type: "UNKNOWN_ACTION" });
// unsubscribe();
// store.dispatch({ type: "ADD_CURRENT_TIME", payload: "2025-07-02 12:00:00" });

const addTimeBtn = document.getElementById("addTime");
addTimeBtn.addEventListener("click", () => {
    store.dispatch(addCurrentTime());
});

const clearTimesBtn = document.getElementById("clearTimes");
clearTimesBtn.addEventListener("click", () => {
    store.dispatch(clearAllTimes());
});

const timesList = document.getElementById("timesList");
store.subscribe(() => {
    timesList.innerHTML = "";
    const times = store.getState();
    times.forEach((time) => {
        const li = document.createElement("li");
        li.textContent = time;
        timesList.appendChild(li);
    });
});
