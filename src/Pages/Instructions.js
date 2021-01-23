import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Wallet } from '../Assets/wallet.svg';

const InstructionStyle = styled.section`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  height: 100%;
  gap: 1rem;

  grid-column: 2 / 5;
  grid-row: 1 / 7;
`;

const InstructionsHeader = styled.header`
  display: flex;
  justify-items: center;
  h1 {
    font-size: 4rem;
    place-self: center;
  }
`;

const InstructionStep = styled.section`
  border-radius: 8px;
  border: 2px solid black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  h2 {
    font-size: 2rem;
    align-self: center;
    padding: 1rem;
  }

  p {
    align-self: center;
  }
`;

const StepNumber = styled.div`
  width: 6rem;
  height: 6rem;
  background: black;
  border-radius: 50%;
  display: grid;
  place-items: center;
  place-self: center;

  span {
    color: white;
    font-size: 2rem;
    font-weight: bold;
  }
`;

const InstructionButton = styled(NavLink)`
  padding: 1rem;
  border: 2px solid;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 200ms;

  place-self: center;
  width: 50%;
  text-decoration: none;
  color: black;
  text-align: center;

  svg {
    height: 2rem;
    width: 2rem;
  }

  &:hover {
    background: black;
    color: white;
    transition: 200ms;
    transform: translateY(-3px);
    fill: white;
  }

  &:active {
    background: rgb(144, 125, 255);
    transform: translateY(0px);
  }
`;

const Instructions = () => {
  return (
    <InstructionStyle>
      <InstructionsHeader>
        <h1>Instructions</h1>
      </InstructionsHeader>

      <InstructionStep>
        <StepNumber>
          <span>1</span>
        </StepNumber>
        <h2>Log into your account</h2>
        <p>
          Logging in let's you save contacts, save the cards you use and
          generally makes the process so much easier.
        </p>
        <InstructionButton to="/login">Log in</InstructionButton>
      </InstructionStep>

      <InstructionStep>
        <StepNumber>
          <span>2</span>
        </StepNumber>
        <h2>Load your Pockett</h2>
        <p>
          Charge your Pockett with your favorite currency of choice, safely.
        </p>
        <InstructionButton to="/pocket">
          <Wallet />
        </InstructionButton>
      </InstructionStep>

      <InstructionStep>
        <StepNumber>
          <span>3</span>
        </StepNumber>
        <h2>Gather 'round</h2>
        <p>Add all your friends, easily, and have them ready for access.</p>
        <InstructionButton to="/contacts">Add some friends</InstructionButton>
      </InstructionStep>

      <InstructionStep>
        <StepNumber>
          <span>4</span>
        </StepNumber>
        <h2>Transfer away</h2>
        <p>
          You can use the cash in your Pockett to pay for basically anything
          online.
        </p>
        <InstructionButton to="/transfer">Transfer</InstructionButton>
      </InstructionStep>
    </InstructionStyle>
  );
};

export default Instructions;
