import React from "react";
import styled from "styled-components";
import { ReactComponent as Add } from "../Assets/add.svg";

const AddNewCardStyle = styled.article`
    display: grid;
    box-shadow: 0px 3px 15px -1px #a0a0a0;
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    transition: 200ms;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    &:hover {
        transform: scale(1.02);
        transition: 200ms;
    }

    &:active {
        transform: scale(1);
    }

    h2 {
        grid-column: span 2;
    }

    svg {
        width: 2.2rem;
        height: 2.2rem;
        place-self: center;

        &:hover {
            transform: scale(1.2);
            transition: 200ms;
        }

        &:active {
            transform: scale(1);
        }
    }

    span {
        grid-column: span 3;
        place-self: center;
    }
`;

const AddNewCard = (props) => {
    return (
        <AddNewCardStyle>
            <h2>Add new card</h2>
            <Add onClick={props.click} />
            <span>You need to fill a couple details for this one.</span>
        </AddNewCardStyle>
    );
};

export default AddNewCard;
