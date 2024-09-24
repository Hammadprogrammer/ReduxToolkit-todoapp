import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/TodoSlice"




export const store = configureStore({
    reducer: {
        todos: todoReducer,
       
    }
})