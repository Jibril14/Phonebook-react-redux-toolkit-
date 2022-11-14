import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialStateValue = {
    contacts: [
        { id: nanoid(5), name: "Tamara Adebayo", number: "070-881-1245" },
        { id: nanoid(5), name: "John Doe", number: "080-772-1245" },
        { id: nanoid(5), name: "Abdullahi Hauwa", number: "090-553-1245" }
    ],
    name: "",
    number: "",
    filter: ""
};

export const phoneBookSlice = createSlice({
    name: "contactInfo",
    initialState: { value: initialStateValue },
    reducers: {
        addContact: (state, action) => {
            state.value.contacts = state.value.contacts.concat(action.payload);
        },

        deleteContact: (state, action) => {
            const newContact = [
                ...state.value.contacts.filter(
                    (contact) => contact.id !== action.payload
                )
            ];

            state.value.contacts = newContact;
            //console.log("delAction", action.payload);
        }
    }
});

export const { addContact, deleteContact } = phoneBookSlice.actions;
export default phoneBookSlice.reducer;
