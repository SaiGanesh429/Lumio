import { createSlice } from "@reduxjs/toolkit";



const liveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        liveChat: []
    },
    reducers: {
        setLiveChat: (state: any, action: any) => {
            if (state.liveChat.length > 10) {
                state.liveChat.splice(10);
            }
            state.liveChat.unshift(action.payload)
        }
    }
})


export const { setLiveChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;