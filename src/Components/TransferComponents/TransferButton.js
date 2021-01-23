import React from 'react';
import styled from 'styled-components';

const TransferButtonStyle = styled.article`
  grid-column: 1 / 13;
  grid-row: 11 / 13;
  display: grid;
  place-items: center;
  background: black;
  color: white;

  border: 2px solid black;
  border-radius: 8px;

  transition: 200ms;

  span {
    font-size: 3rem;
    font-weight: bolder;
  }

  &:hover {
    background: white;
    color: black;

    transition: 200ms;
    cursor: pointer;

    transform: translateY(-3px);
  }

  &:active {
    background: black;
    color: white;
    transform: translateY(0);
  }
`;

const TransferButton = () => {
  return (
    <TransferButtonStyle>
      <span>{'transfer'.toUpperCase()}</span>
    </TransferButtonStyle>
  );
};

export default TransferButton;
