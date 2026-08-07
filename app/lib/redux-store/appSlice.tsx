import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSideNavBarOpen: true,
        // Define your initial state properties here
    },
    reducers: {
        toggleSideNavBar: (state: any) => {
            state.isSideNavBarOpen = !state.isSideNavBarOpen;
        }
        // Define your reducers here
    },
});


export const { toggleSideNavBar } = appSlice.actions;
export default appSlice.reducer;