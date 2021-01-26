import React from 'react';
import styled from 'styled-components';
import CardRow from '../CardRow';
import LittleCards from '../LittleCards';

const TransferCardsStyle = styled.article`
  grid-column: 6 / 13;
  grid-row: 1 / 6;

  border: 2px solid black;
  border-radius: 8px;

  padding: 0.5rem;

  h2 {
    text-align: start;
    align-self: center;
    font-size: 1rem;
  }

  display: grid;
  grid-template-rows: 1fr 2fr;
`;

const TransferCards = (props) => {
  return (
    <TransferCardsStyle>
      <h2>All your cards</h2>
      <CardRow>
        {props.cardsData.map((v, i) => (
          <LittleCards key={i} name={v.name} cardNumber={v.cardNumber} />
        ))}
      </CardRow>
    </TransferCardsStyle>
  );
};

export default TransferCards;
