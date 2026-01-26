import getCurrentTime from "../utils/getCurrentTime.js";
import * as actionTypes from "./actionTypes.js";

function addCurrentTime() {
    return {
        type: actionTypes.ADD_CURRENT_TIME,
        payload: getCurrentTime(),
    };
}

function clearAllTimes() {
    return {
        type: actionTypes.CLEAR_ALL_TIMES,
    };
}

export { addCurrentTime, clearAllTimes };
