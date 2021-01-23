import React from 'react';
import styled from 'styled-components';
import TransferAmount from '../Components/TransferComponents/TransferAmount';
import TransferButton from '../Components/TransferComponents/TransferButton';
import TransferCards from '../Components/TransferComponents/TransferCards';
import TransferConfirm from '../Components/TransferComponents/TransferConfirm';
import TransferContacts from '../Components/TransferComponents/TransferContacts';

const TransferStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 0.5rem;

  grid-column: 2 / 5;
  grid-row: 1 / 7;
`;

const Transfer = (props) => {
  return (
    <TransferStyle>
      <TransferContacts userData={props.userData} />
      <TransferCards cardsData={props.cardsData} />
      <TransferAmount />
      <TransferConfirm />
      <TransferButton />
    </TransferStyle>
  );
};

export default Transfer;
