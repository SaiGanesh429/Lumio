import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";



const ReduxStore = configureStore({
    reducer: {
        app: appSlice,
        videos: videoSlice
    }
    // Define your Redux store properties and methods here
});


export default ReduxStore;