import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSideNavBarOpen: true,
        selectedCategory: "All",
        // Define your initial state properties here
    },
    reducers: {
        toggleSideNavBar: (state: any) => {
            state.isSideNavBarOpen = !state.isSideNavBarOpen;
        }
        ,
        setSelectedCategory: (state: any, action: any) => {
            state.selectedCategory = action.payload;
        }
        // Define your reducers here
    },
});


export const { toggleSideNavBar, setSelectedCategory } = appSlice.actions;
export default appSlice.reducer;