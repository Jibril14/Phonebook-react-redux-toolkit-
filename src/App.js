import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import { nanoid } from "nanoid";
import Filter from "./components/Filter";

class App extends Component {
    state = {
        contacts: [
            { id: nanoid(5), name: "Tamara Adebayo", number: "070-881-1245" },
            { id: nanoid(5), name: "Jane Doe", number: "080-772-1245" },
            { id: nanoid(5), name: "Abdullahi Hauwa", number: "090-553-1245" }
        ],
        name: "",
        number: "",
        filter: ""
    };

    // onChange Handler
    AddInputToState = (e) => {
        let name = e.target.name;
        let number = e.target.number;

        this.setState({
            ...this.state,
            [name]: e.target.value,
            [number]: e.target.value
        });
    };

    // onClick Handler
    AddStateInputToContact = (e) => {
        e.preventDefault();

        this.setState((prevState) => ({
            contacts: [
                ...prevState.contacts,
                {
                    id: nanoid(5),
                    name: this.state.name,
                    number: this.state.number
                }
            ]
        }));

        this.setState(() => ({ name: "", number: "" }));
        e.target.closest("form").reset();
    };

    searchInputHandler = (e) => {
        const userInput = e.target.value;
        this.setState({
            filter: userInput
        });
    };

    filteredSearchContacts = () => {
        const filteredContacts = [...this.state.contacts].filter((contact) =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        );
        return filteredContacts;
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
                <Section title="Search Contacts">
                    <Filter Changed={this.searchInputHandler} />
                </Section>
                <Section title="Contacts">
                    <Contacts contacts={this.filteredSearchContacts()} />
                </Section>
            </>
        );
    }
}

export default App;
