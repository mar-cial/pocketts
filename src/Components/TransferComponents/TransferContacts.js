import React from 'react';
import styled from 'styled-components';
import TransferTile from '../TransferTile';

const TransferContactsStyle = styled.section`
  display: grid;
  grid-template-rows: 1fr 6fr;
  gap: 0.5rem;

  grid-column: 1 / 6;
  grid-row: 1 / 11;

  border: 2px solid black;
  border-radius: 8px;
  padding: 0.5rem;

  h2 {
    text-align: start;
    align-self: center;

    font-size: 2rem;
  }
  overflow: auto;
`;

const TransferContacts = (props) => {
  console.log(props.userData);
  return (
    <TransferContactsStyle>
      <h2>Contacts</h2>
      {props.userData.map((v, i) => {
        return (
          <TransferTile
            key={i}
            name={v.name}
            username={v.username}
            email={v.email}
            onClick={v.click}
          />
        );
      })}
    </TransferContactsStyle>
  );
};

export default TransferContacts;
