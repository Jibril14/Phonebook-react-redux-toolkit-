import styled from "styled-components";

function Contacts() {
    return (
        <ul>
            <StyleUi>
                <i
                    className="fas fa-phone-alt"
                    style={{ color: "red", margin: "4px" }}
                ></i>
                Tamara Adeyemi
            </StyleUi>
            <StyleUi>
                <i
                    className="fas fa-phone-alt"
                    style={{ color: "red", margin: "4px" }}
                ></i>
                John Doe
            </StyleUi>
            <StyleUi>
                <i
                    className="fas fa-phone-alt"
                    style={{ color: "red", margin: "4px" }}
                ></i>
                Abdullahi Hauwa
            </StyleUi>
        </ul>
    );
}

export default Contacts;

const StyleUi = styled.li`
    list-style-type: none;
`;
