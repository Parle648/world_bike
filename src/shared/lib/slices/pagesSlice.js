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
        incrementPage (state) {
            state.value.currentPage += 1;
        },
        decrementPage (state) {
            if (state.value.currentPage !== 1) {
                state.value.currentPage -= 1;
            }
        },
    }
});

export const { setPages, choosePage, incrementPage, decrementPage } = pagesSlice.actions;

export default pagesSlice.reducer;