import React from 'react'
import styled from 'styled-components'

const NavigationStyle = styled.nav`
    display: grid;
    gap: 0.5rem;
    background: white;
    border-radius: 8px;

    grid-template-columns: repeat(1, 1fr);
    padding: 1rem;
    grid-column: 1 / -1;
`

const Navigation = (props) => {
    return (
        <NavigationStyle>
            {props.children}
        </NavigationStyle>
    )
}

export default Navigation
