import React from "react";
import styled from "styled-components";

const LittleCardsStyle = styled.div`
    background: black;
    border-radius: 8px;

    word-wrap: break-word;

    color: white;
    padding: 0.6rem;

    h2 {
        font-size: 1rem;
    }

    h3 {
        font-size: 0.8rem;
        color: grey;
    }
`;

const LittleCards = (props) => {
    return (
        <LittleCardsStyle>
            <h2>{props.name}</h2>
            <h3>{`*${props.cardNumber}`}</h3>
        </LittleCardsStyle>
    );
};

export default LittleCards;
