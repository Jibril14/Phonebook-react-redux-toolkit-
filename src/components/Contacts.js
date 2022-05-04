import styled from "styled-components";
import propsType from "prop-types";

function Contacts(props) {
    return (
        <ul>
            {props.contacts.map(({ id, name, number }) => {
                return (
                    <StyleUi key={id}>
                        <i
                            className="fas fa-phone-alt"
                            style={{ color: "red", margin: "4px" }}
                        ></i>
                        {name}: ({number})
                    </StyleUi>
                );
            })}
        </ul>
    );
}

export default Contacts;

Contacts.propsType = {
    contacts: propsType.array
};

const StyleUi = styled.li`
    list-style-type: none;
`;
