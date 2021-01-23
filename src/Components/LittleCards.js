import React from 'react';
import styled from 'styled-components';

const LittleCardsStyle = styled.div`
  display: grid;

  border: 2px solid black;
  border-radius: 8px;
  padding: 0.3rem;

  transition: 200ms;
  background: blue;
  grid-template-rows: 3fr 1fr;

  background: ${(props) => (props.active ? 'black' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1rem;
    background: none;
    place-self: end;
  }

  &:hover {
    transform: scale(1.008);
    transition: 200ms;
    cursor: pointer;
  }

  &:active {
    background: black;
    color: white;
    transform: scale(1);
  }
`;

const LittleCards = (props) => {
  return (
    <LittleCardsStyle>
      <h2>{props.name}</h2>
      <h3 onClick={props.click}>{`*${props.cardNumber}`}</h3>
    </LittleCardsStyle>
  );
};

export default LittleCards;
