import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialStateValue = {
    contacts: [
        { id: nanoid(5), name: "Tamara Adebayo", number: "070-881-1245" },
        { id: nanoid(5), name: "John Doe", number: "080-772-1245" },
        { id: nanoid(5), name: "Abdullahi Hauwa", number: "090-553-1245" }
    ],
    filter: ""
};

export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },

        deleteContact: (state, action) => {
            console.log("action", action);
            console.log("action.payload.id", action.payload.id);
        }
    }
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
