import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
//import { nanoid } from "nanoid";
import Filter from "./components/Filter";

class App extends Component {
    state = {
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

    searchInputHandler = (e) => {
        const userInput = e.target.value;
        this.setState({
            filter: userInput
        });
    };

    filteredSearchContacts = () => {
        // const filteredContacts = [...this.state.contacts].filter((contact) =>
        //    contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        // );
        // return filteredContacts;
    };

    deleteContactHandler = (key) => {
        //  this.setState({
        //     contacts: this.state.contacts.filter(
        //         (contact) => contact.id !== key
        //     )
        //  });
    };

    render() {
        let AddStateInputToContact;
        if (this.state.name || this.state.number !== "") {
            AddStateInputToContact = (e) => {
                e.preventDefault();

                /**  this.setState((prevState) => ({
                    contacts: [
                        ...prevState.contacts,
                        {
                            id: nanoid(5),
                            name: this.state.name,
                            number: this.state.number
                        }
                    ]

                }));
            **/
            };
        } else {
        }
        return (
            <>
                <Section title="Phonebook">
                    <Form
                        Clicked={AddStateInputToContact}
                        Changed={this.AddInputToState}
                    />
                </Section>
                <Section title="Search Contacts">
                    <Filter Changed={this.searchInputHandler} />
                </Section>
                <Section title="Contacts">
                    <Contacts Clicked={this.deleteContactHandler} />
                </Section>
            </>
        );
    }
}

export default App;
