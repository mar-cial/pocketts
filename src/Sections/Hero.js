import React from "react";
import styled from "styled-components";

const HeroStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    
    h1 {
        font-size: 4rem;
    }
`;

const Hero = (props) => {
    return (
        <HeroStyled>
            {props.children}
        </HeroStyled>
    );
};

export default Hero;
