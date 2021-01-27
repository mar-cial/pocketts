import React from 'react';
import styled from 'styled-components';

const TransferConfirmStyle = styled.article`
  grid-column: 6 / 13;
  grid-row: 9 / 11;

  border: 2px solid black;
  border-radius: 8px;

  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 2rem;
    font-weight: bold;
  }

  button {
    background: white;
    padding: 1rem 2rem;
    border: 2px solid black;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      background: black;
      color: white;
      transition: 200ms;
      transform: translateY(-3px);
      cursor: pointer;
    }

    &:active {
      background: white;
      transform: translateY(0px);
      color: black;
    }
  }
`;

const TransferConfirm = () => {
  return (
    <TransferConfirmStyle>
      <span>Confirm?</span>
      <button>yes</button>
    </TransferConfirmStyle>
  );
};

export default TransferConfirm;
