import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactReducer";

// Store
const store = configureStore({
    reducer: {
        contact: contactReducer
    }
});

export default store;
