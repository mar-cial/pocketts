import React from 'react';
import styled from 'styled-components';

const TransferConfirmStyle = styled.article`
  grid-column: 6 / 13;
  grid-row: 9 / 11;

  border: 2px solid black;
  border-radius: 8px;
`;

const TransferConfirm = () => {
  return <TransferConfirmStyle></TransferConfirmStyle>;
};

export default TransferConfirm;
