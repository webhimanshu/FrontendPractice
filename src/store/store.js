import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";


// const rootReducers = combineReducers({
//     todo: todoSlice
// });

const store = configureStore({
    reducer: {
        todo: todoSlice
    },
});

export default store;