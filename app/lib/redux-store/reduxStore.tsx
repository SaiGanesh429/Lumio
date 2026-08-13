import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import SearchSlice from "./SearchSlice";
import liveChatSlice from "./liveChatSlice";



const ReduxStore = configureStore({
    reducer: {
        app: appSlice,
        videos: videoSlice,
        Search: SearchSlice,
        liveChat:liveChatSlice
    }
    // Define your Redux store properties and methods here
});


export default ReduxStore;