import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavigationLinkStyle = styled(NavLink)`
    padding: 1rem;
    color: black;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    border-radius: 8px;
    border: 2px solid black;

    &:hover {
        transform: translateY(-3px);
        transition: 200ms;
        background: black;
        color: white;
    }

    &:active {
        transform: translateY(0);

    }
`

const NavigationLinkComponent = (props) => {
    return (
        <NavigationLinkStyle to={props.toProp} onClick={props.click}>
            {props.linkText}
        </NavigationLinkStyle>
    )
}

export default NavigationLinkComponent
