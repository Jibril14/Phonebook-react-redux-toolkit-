import { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { addContact } from "../store/contactReducer";
import { useDispatch, useSelector } from "react-redux";

function Form() {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNumber, setEnteredNumber] = useState("");

    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contact.value.contacts);

    const isContactInContacts = (contacts, newContactName) =>
        contacts.some(({ name }) => name === newContactName);

    const isContactEmpty = (ContactName, ContactNumber) =>
        ContactName === "" || ContactNumber === "";

    //console.log("myCheck", isContactInContacts(contacts, enteredName));

    // onChange Handler
    const AddInputToState = (e) => {
        e.preventDefault();
        if (isContactInContacts(contacts, enteredName)) {
            alert(`${enteredName} is already in contacts`);
            return;
        }
        if (isContactEmpty(enteredName, enteredNumber)) {
            alert(`Please fill in both fields!`);
            return;
        }
        dispatch(
            addContact({
                id: nanoid(5),
                name: enteredName,
                number: enteredNumber
            })
        );
    };

    return (
        <HtmlForm>
            <Label htmlFor={nanoid()}>Enter Name</Label>
            <Input
                type="text"
                name="name"
                id="name"
                pattern="[A-Za-z ]+" // either case, space any length
                title="Enter Valid Letters Only"
                required
                value={enteredName}
                onChange={(e) => {
                    setEnteredName(e.target.value);
                }}
            />

            <Label htmlFor={nanoid()}>Phone Number</Label>
            <Input
                type="tel"
                name="number"
                id="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={enteredNumber}
                onChange={(e) => {
                    setEnteredNumber(e.target.value);
                }}
            />

            <Button onClick={AddInputToState} type="submit">
                Add contact
            </Button>
        </HtmlForm>
    );
}

export default Form;
/**
Form.propsType = {
    Changed: propsType.func,
    Clicked: propsType.func
};
**/
const HtmlForm = styled.form`
    border: 1px solid black;
    padding: 5px 15px;
    width: 40%;

    @media (max-width: 760px) {
        width: 90%;
    }
`;

const Label = styled.label`
    display: block;
`;

const Button = styled.button`
    background-color: #6eff70;
    color: white;
    font: inherit;
    display: block;
    border: 1px solid lightgreen;
    border-radius: 3px;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #70db93;
        color: #000;
    }
`;

const Input = styled.input`
    margin: 8px 0 15px 0;
    width: 90%;

    &:focus {
        outline-color: #c82536;
        box-shadow: 0 0 8px #ffffe0;
    }
`;
