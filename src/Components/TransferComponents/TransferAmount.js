import React from 'react';
import styled from 'styled-components';

const TransferAmountStyle = styled.article`
  grid-column: 6 / 13;
  grid-row: 6 / 9;
  border: 2px solid black;
  border-radius: 8px;

  display: grid;
  padding: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
`;

const EnterAmountStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  input {
    padding: 0.5rem;
    border: 2px solid black;
    border-radius: 6px;
  }
`;

const AmountDisplayStyle = styled.div`
  display: grid;
  place-items: center;

  span {
    font-size: 3rem;
    font-weight: bold;
  }
`;

const TransferAmount = () => {
  return (
    <TransferAmountStyle>
      <EnterAmountStyle>
        <h3>Enter the amount to transfer</h3>
        <input></input>
      </EnterAmountStyle>
      <AmountDisplayStyle>
        <span>$125,125.00</span>
      </AmountDisplayStyle>
    </TransferAmountStyle>
  );
};

export default TransferAmount;
