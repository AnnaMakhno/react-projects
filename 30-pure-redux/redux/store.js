// import { configureStore } from "https://cdn.jsdelivr.net/npm/redux-toolkit@1.9.5/+esm";
import { configureStore } from "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit/+esm";
import reduser from "./reduser.js";

configureStore({
    reducer: reduser,
});

export default configureStore;
