import React from 'react'
import styled from 'styled-components';

const HeroRightStyle = styled.aside`
    overflow: scroll;
    grid-column: span 3;
    padding-left: 1rem;
`;

const HeroRight = (props) => {
    return (
        <HeroRightStyle>
            {props.children}
        </HeroRightStyle>
    )
}

export default HeroRight
