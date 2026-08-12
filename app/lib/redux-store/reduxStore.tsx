import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import SearchSlice from "./SearchSlice";



const ReduxStore = configureStore({
    reducer: {
        app: appSlice,
        videos: videoSlice,
        Search: SearchSlice
    }
    // Define your Redux store properties and methods here
});


export default ReduxStore;