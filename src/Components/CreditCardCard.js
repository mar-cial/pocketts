import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../Assets/star.svg";
import { ReactComponent as StarFill } from "../Assets/star-fill.svg";

const CreditCardCardStyle = styled.article`
    display: grid;
    box-shadow: 0px 3px 15px -1px #a0a0a0;
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    transition: 200ms;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    grid-template-areas:
        "card . cardNumber"
        ". . ."
        "star total total";

    h2 {
        place-self: center;
        grid-area: card;
    }

    h3 {
        place-self: center;
        grid-area: cardNumber;
    }

    p {
        justify-self: end;
        align-self: center;
        grid-area: total;
        font-weight: bold;
        font-size: 1.6rem;
    }

    &:hover {
        transform: scale(1.02);
        transition: 200ms;
    }

    &:active {
        transform: scale(1);
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
        grid-area: star;
        justify-self: center;
        align-self: center;
    }
`;

const CreditCardCard = (props) => {
    return (
        <CreditCardCardStyle>
            <h2>{props.cardName}</h2>
            <h3>{`(*${props.cardNumber})`}</h3>
            {props.starred ? <StarFill /> : <Star />}
            <p>{props.total}</p>
        </CreditCardCardStyle>
    );
};

export default CreditCardCard;
