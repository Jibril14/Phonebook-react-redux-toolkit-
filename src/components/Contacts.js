import styled from "styled-components";
import propsType from "prop-types";

function Contacts(props) {
    return (
        <ul>
            {props.contacts.map((val) => {
                return (
                    <StyleUi key={val.id}>
                        <i
                            className="fas fa-phone-alt"
                            style={{ color: "red", margin: "4px" }}
                        ></i>
                        {val.name}
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
