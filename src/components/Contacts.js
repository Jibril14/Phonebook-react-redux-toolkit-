import styled from "styled-components";

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

const StyleUi = styled.li`
    list-style-type: none;
`;
