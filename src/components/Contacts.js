import styled from "styled-components";
import propsType from "prop-types";
import { useSelector } from "react-redux";

function Contacts(props) {
    const contacts = useSelector((state) => state.contact.value.contacts);
    console.log("PhoneName", contacts);

    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                    <Styleli key={id}>
                        <i
                            className="fas fa-phone-alt"
                            style={{ color: "red", margin: "4px" }}
                        ></i>
                        {name}: ({number})
                        <BtnDelete onClick={() => props.Clicked(id)}>
                            Delete
                        </BtnDelete>
                    </Styleli>
                );
            })}
        </ul>
    );
}

export default Contacts;

Contacts.propsType = {
    Clicked: propsType.func
};

const Styleli = styled.li`
    list-style-type: none;
`;

const BtnDelete = styled.button`
    padding: 4px;
    font-size: 12px;
    margin-left: 10px;
    margin-bottom: 5px;
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
    &:hover {
        background-color: #9e0508;
        color: #fff;
    }
`;
