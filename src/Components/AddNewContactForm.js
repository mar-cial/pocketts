import React from 'react'
import styled from 'styled-components'

const AddNewContactFormStyle = styled.form`
    display: grid;
    background: black;
    color: white;
    font-weight: bold;
    grid-column: span 2;
    grid-row: span 3;
    padding: 1rem;
    gap: 0.6rem;
`

const InputStyle = styled.input`
    padding: 0.4rem;
    background: white;
    border-radius: 8px;
    border: none;
`


const AddNewContactForm = () => {
    return (
        <AddNewContactFormStyle>
            <label>Name</label>
            <InputStyle></InputStyle>
            <label>Email</label>
            <InputStyle></InputStyle>
            <label>Username</label>
            <InputStyle></InputStyle>
        </AddNewContactFormStyle>
    )
}

export default AddNewContactForm
