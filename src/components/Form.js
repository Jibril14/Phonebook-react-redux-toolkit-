// import React from 'react';
import { nanoid } from "nanoid";
import styled from "styled-components";
import propsType from "prop-types";

function Form(props) {
    const loginInputId = nanoid();
    const loginInputId2 = nanoid();

    return (
        <HtmlForm onChange={props.Changed}>
            <Label htmlFor={loginInputId}>Enter Name</Label>
            <Input
                type="text"
                name="name"
                id={loginInputId}
                pattern="[A-Za-z ]+" // either case, space any length
                title="Enter Valid Letters Only"
                required
            />

            <Label htmlFor={loginInputId2}>Phone Number</Label>
            <Input
                type="tel"
                name="number"
                id={loginInputId2}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />

            <Button onClick={props.Clicked} type="submit">
                Add contact
            </Button>
        </HtmlForm>
    );
}

export default Form;

Form.propsType = {
    Changed: propsType.func,
    Clicked: propsType.func
};

const HtmlForm = styled.form`
    border: 1px solid black;
    padding: 15px;
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
