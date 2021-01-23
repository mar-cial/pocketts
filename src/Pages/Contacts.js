import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddNewContact from '../Components/AddNewContact';

import ContactCard from '../Components/ContactCard';

const ContactsPageContainer = styled.section`
  display: grid;
  gap: 1rem;
  overflow: auto;
  grid-auto-rows: minmax(200px, 300px);

  grid-column: 2 / 5;
  grid-row: 1 / 7;
`;

const Contacts = (props) => {
  return (
    <ContactsPageContainer>
      <AddNewContact />
      {props.userData.map((v, i) => {
        return (
          <ContactCard
            key={i}
            name={v.name}
            username={`@${v.username}`}
            email={v.email}
          />
        );
      })}
    </ContactsPageContainer>
  );
};

export default Contacts;
