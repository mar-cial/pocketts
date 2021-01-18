import React from 'react'
import styled from 'styled-components'
import { ReactComponent as AddButton } from "../Assets/import.svg";
import AddNewContactForm from './AddNewContactForm';

const AddNewContactStyle = styled.article`
    display: grid;
    padding: 1rem;
    border: 2px solid black;
    border-radius: 8px;
    grid-template-columns: repeat(4, 1fr);
    
    
    h1 {
        grid-column: span 1;
        grid-row: span 3;
    }

    svg {
        grid-column: 4 / 5;
        grid-row: 1 / 4;
        height: 70%;
        width: 70%;
        place-self: center;
        transition: 200ms;

        &:hover {
            transform: scale(1.2);
            transition: 200ms;
            cursor: pointer;
        }

        &:active {
            transform: scale(1);
        }
    }
`

const AddNewContact = () => {
    return (
        <AddNewContactStyle>
            <h1>Add a new contact</h1>
            <AddNewContactForm />
            <AddButton />
        </AddNewContactStyle>
    )
}

export default AddNewContact
