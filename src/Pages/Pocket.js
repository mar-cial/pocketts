import React, { useState } from "react";
import styled from "styled-components";
import AddNewCard from "../Components/AddNewCard";
import CreditCardCard from "../Components/CreditCardCard";
import { cities } from "../Assets/data";

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

const Pocket = () => {
    const [cards, setCards] = useState([]);

    const newCard = () => {
        var number = {
            name: cities[Math.floor(Math.random() * cities.length)],
            cardNumber: Math.floor(Math.random() * 10000),
            cardTotal: Math.floor(Math.random() * 100000),
        };

        setCards((allcards) => [...allcards, number]);
    };

    return (
        <PocketStyle>
            <header>
                <h1>Pockett</h1>
            </header>
            <AddNewCard click={() => newCard()} />
            {cards.map((v, i) => (
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
