import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => { },
        removeItem: (state, action) => { }
    }
});

export const { addItem, removeItem } = todoSlice.actions;
export default todoSlice.reducers;

