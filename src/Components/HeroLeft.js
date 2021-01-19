import React from "react";
import styled from "styled-components";

const HeroLeftStyle = styled.div`
    background: black;
    color: white;
    padding: 1rem;
    border-radius: 10px 0 0 10px;
`;

const HeroRibbon = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 2rem;
    gap: 1rem;
`;

const HeroLeft = (props) => {
    return (
        <HeroLeftStyle>
            <h1>Pockett</h1>
            <h1>Transfers</h1>
            <h2>
                Your number one stop for easy, fast and secure money transfers.
            </h2>
            <HeroRibbon>{props.children}</HeroRibbon>
        </HeroLeftStyle>
    );
};

export default HeroLeft;
