import { createSlice } from "@reduxjs/toolkit";

const currentFilters = createSlice({
    name: 'currentFilters',
    initialState: {
        value: {
            has: false,
            categories: [],
            cost: {
                from: 0,
                to: 1200000
            },
            brands: [],
            frame_materials: [],
            sortBy: '',
            search: '',
        },
    },
    reducers: {
        pushParam (state, {payload}) {
            const name = Object.keys(payload)[0]
            state.value[name].push(payload[name])
        },
        popParam (state, {payload}) {
            const name = Object.keys(payload)[0]
            state.value[name].pop(payload[name])
        },
        setParam (state, {payload}) {
            console.log(payload);
        }
    }
})

export const { pushParam, popParam, setParam } = currentFilters.actions;

export default currentFilters.reducer;