import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "John Doe", number: "12345678" };

export const phoneBookSlice = createSlice({
    name: "contactInfo",
    initialState: { value: initialStateValue },
    reducers: {}
});

export default phoneBookSlice.reducer;
