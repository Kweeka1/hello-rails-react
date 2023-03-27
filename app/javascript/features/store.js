import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./greetings/greetingSlice";

const store = configureStore({
    reducer: {
        greeting: greetingSlice,
    }
})

export default store;
