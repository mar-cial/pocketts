import React from "react";
import styled from "styled-components";

const MainButtonStyle = styled.a`
    padding: 1rem;
    border: 2px solid;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 200ms;
    display: grid;
    place-items: center;

    &:hover {
        background: black;
        color: white;
        transition: 200ms;
        transform: translateY(-3px);
    }

    &:active {
        background: rgb(144, 125, 255);
        transform: translateY(0px);
    }

    svg {
        width: 3rem;
    }
`;

const MainButton = (props) => {
    return (
        <MainButtonStyle onClick={props.click}>{props.text}</MainButtonStyle>
    );
};

export default MainButton;
