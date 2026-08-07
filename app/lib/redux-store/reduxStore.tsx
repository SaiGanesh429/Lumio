import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";



const ReduxStore = configureStore({
    reducer: {
        app: appSlice
    }
    // Define your Redux store properties and methods here
});


export default ReduxStore;