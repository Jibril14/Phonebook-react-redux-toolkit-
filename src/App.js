import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import { nanoid } from "nanoid";

class App extends Component {
    state = {
        contacts: [
            { id: nanoid(5), name: "Tamara Adebayo", number: "070-881-1245" },
            { id: nanoid(5), name: "Jane Doe", number: "080-772-1245" },
            { id: nanoid(5), name: "Abdullahi Hauwa", number: "090-553-1245" }
        ],
        name: "",
        number: ""
    };

    AddInputToState = (e) => {
        let name = e.target.name;
        let number = e.target.number;
        number = e.target.value;
        console.log("entNumm", number);

        this.setState({
            ...this.state,
            [name]: e.target.value,
            [number]: e.target.value
        });
    };

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

        // this.setState((state) => ({ name: "", number: "" }));
        //e.target.previousSibling.value = "";

        e.target.closest("form").reset();
        //console.log("form?", e.target.closest("form"));
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
