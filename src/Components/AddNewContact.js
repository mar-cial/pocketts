import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Add } from '../Assets/add.svg';

const AddNewContactContainerStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 2px solid black;
  border-radius: 8px;
  gap: 0.5rem;
  padding: 1rem;
  grid-row: span 1;

  h2 {
    font-size: 2.6rem;
    align-self: center;
  }

  svg {
    width: 70%;
    height: 70%;
    place-self: center;

    &:hover {
      transform: scale(1.2);
      transition: 200ms;
      cursor: pointer;
    }

    &:active {
      transform: scale(1);
    }
  }
`;

const ContactForm = styled.form`
  display: grid;
  background: black;
  border-radius: 8px;
  grid-template-rows: repeat(6, 1fr);
  padding: 0.5rem;
  gap: 0.5rem;

  label {
    color: white;
    font-weight: bold;
  }

  input {
    border-radius: 2px;
    border: none;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const AddNewContact = () => {
  return (
    <AddNewContactContainerStyle>
      <h2>{`Add a new contact`.toUpperCase()}</h2>
      <ContactForm>
        <label>Email</label>
        <input type="email" required />
        <label>Card Number</label>
        <input type="text" required />
        <label>Name</label>
        <input type="text" required />
      </ContactForm>
      <Add />
    </AddNewContactContainerStyle>
  );
};

export default AddNewContact;
