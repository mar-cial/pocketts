import React from 'react';
import styled from 'styled-components';
import AddNewCard from '../Components/AddNewCard';
import CreditCardCard from '../Components/CreditCardCard';

const PocketStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-height: 95vh;
  grid-auto-rows: minmax(200px, 200px);
  gap: 1rem;

  grid-column: 2 / 5;
  grid-row: 1 / 7;

  overflow: auto;
  padding: 0.5rem;

  header {
    h1 {
      font-size: 3rem;
    }
    h3 {
      padding-top: 1rem;
    }
  }
`;

const Pocket = (props) => {
  return (
    <PocketStyle>
      <header>
        <h1>Pockett</h1>
        <h3>Here are all the cards you can use to make a transfer</h3>
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
