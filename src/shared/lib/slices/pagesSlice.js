import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
    name: "pagesSlice",
    initialState: {
        value: {
            currentPage: 1,
            pagesCount: 4,
        },
    },
    reducers: {
        setPages (state, {payload}) {
            state.value.pagesCount = payload;
        },
        choosePage (state, {payload}) {
            state.value.currentPage = payload;
        },
    }
});

export const { setPages, choosePage } = pagesSlice.actions;

export default pagesSlice.reducer;