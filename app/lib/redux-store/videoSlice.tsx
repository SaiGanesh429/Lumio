import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        selectedVideo: null,
        videoList: [],
        playListVideos: [],
        historyVideos: [],
        // Define your initial state properties here
    },
    reducers: {
        setVideoList: (state: any, action: any) => {
            state.videoList = action.payload;
        },
        setSelectedVideo: (state: any, action: any) => {
            state.selectedVideo = action.payload;
        },
        setPlayListVideos: (state: any, action: any) => {
            state.playListVideos = action.payload;
        },
        setHistoryVideos: (state: any, action: any) => {
            state.historyVideos.push(action.payload);
        }

    },
});


export const { setSelectedVideo, setVideoList, setPlayListVideos, setHistoryVideos } = videoSlice.actions;
export default videoSlice.reducer;