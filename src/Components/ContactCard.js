import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowRight } from "../Assets/arrow-right.svg";

const ContactCardStyle = styled.article`
    display: grid;
    padding: 1rem;
    border: 2px solid black;
    border-radius: 8px;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    
    h1 {
        grid-column: 1 / 4;
        grid-row: span 1;
    }

    h2 {
        grid-column: 1 / 4;
        grid-row: span 1;
        color: grey;
    }

    span {
        grid-column: 1 / 4;
        grid-row: span 1;
    }
`

const ArrowNavLink = styled(NavLink)`
    grid-column: 4 / 5;
    grid-row: 1 / 4;
    place-self: center;
    svg {
        grid-column: 4 / 5;
        grid-row: 1 / 4;
        height: 50%;
        width: 50%;
        
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

const ContactCard = (props) => {
    return (
        <ContactCardStyle>
            <h1>{props.name}</h1>
            <h2>{props.username}</h2>
            <span>{props.email}</span>
            <ArrowNavLink to="/transfer">
                <ArrowRight />
            </ArrowNavLink>
        </ContactCardStyle>
    );
};

export default ContactCard;
