import React from "react";
import styled from "styled-components";
import AddNewCard from "../Components/AddNewCard";
import CreditCardCard from "../Components/CreditCardCard";

const PocketStyle = styled.section`
    display: grid;
    grid-template-rows: 1fr 3fr 3fr 3fr;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    gap: 1rem;

    header {
        grid-column: span 4;
        h1 {
        }
    }
`;

const Pocket = (props) => {
    return (
        <PocketStyle>
            <header>
                <h1>Pockett</h1>
            </header>
            <AddNewCard click={props.click} />
            {props.cardsState.map((v, i) => (
                <CreditCardCard
                    key={i}
                    cardNumber={v.cardNumber}
                    total={v.cardTotal}
                    cardName={v.name}
                />
            ))}
        </PocketStyle>
    );
};

export default Pocket;
