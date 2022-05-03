import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import { nanoid } from "nanoid";

class App extends Component {
    state = {
        contacts: [
            { id: nanoid(5), name: "Tamara Adebayo" },
            { id: nanoid(5), name: "Jane Doe" },
            { id: nanoid(5), name: "Abdullahi Hauwa" }
        ],
        name: ""
    };

    AddInputToState = (e) => {
        const enteredNum = e.target.value;
        this.setState({
            ...this.state,
            name: enteredNum
        });
    };

    AddStateInputToContact = (e) => {
        e.preventDefault();

        this.setState((prevState) => ({
            contacts: [
                ...prevState.contacts,
                { id: nanoid(5), name: this.state.name }
            ]
        }));

        e.target.previousSibling.value = "";
    };

    render() {
        return (
            <>
                <Section title="Phonebook">
                    <Form
                        Clicked={this.AddStateInputToContact}
                        Changed={this.AddInputToState}
                    />
                </Section>
                <Section title="Contacts">
                    <Contacts contacts={this.state.contacts} />
                </Section>
            </>
        );
    }
}

export default App;
