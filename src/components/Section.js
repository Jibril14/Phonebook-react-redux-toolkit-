import PropTypes from "prop-types";
import styled from "styled-components";

const Section = ({ title, children }) => {
    return (
        <StyleDiv>
            <H1>{title}</H1>
            {children}
        </StyleDiv>
    );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object // objects or arrays
};

export default Section;

const H1 = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: red;
    margin: 10px 0;
`;

const StyleDiv = styled.div`
    width: 760px;
    max-width: 760px;
    margin: 20px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #6b4226;
    padding: 10px 16px;

    @media (max-width: 760px) {
        width: 100%;
    }
`;
