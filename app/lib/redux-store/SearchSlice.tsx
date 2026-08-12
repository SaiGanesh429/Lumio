import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheAutoSuggestResults: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
})



export const { cacheAutoSuggestResults, } = SearchSlice.actions;
export default SearchSlice.reducer;