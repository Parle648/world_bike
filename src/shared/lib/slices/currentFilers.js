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
        setHasAttribute (state, {payload}) {
            state.value.has = payload;
        },
        pushParam (state, {payload}) {
            const {value, type} =  payload;
            state.value[type].push(value)
        },
        popParam (state, {payload}) {
            const {value, type} =  payload;
            state.value[type].pop(value)
        },
        setParam (state, {payload}) {
            const {attribute, content} = payload;
            state.value[attribute] = content
        },
        setCost (state, {payload}) {
            const {attribute, value} = payload
            state.value.cost[attribute] = value
        },
    }
})

export const { setHasAttribute, pushParam, popParam, setParam, setCost } = currentFilters.actions;

export default currentFilters.reducer;