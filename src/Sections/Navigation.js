import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Pocket } from "../Assets/wallet.svg";

const NavigationStyle = styled.nav`
    height: 30vh;
    background: black;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const MainLinks = styled.section`
    padding: 1rem;
    line-height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`;

const NavlinkStyled = styled(NavLink)`
    font-size: 2rem;
    font-family: "Merriweather", serif;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: 200ms;

    &:hover {
        color: gray;
        transition: 200ms;
    }

    &:active {
        color: rgb(144, 125, 255);
    }
`;

const StyledPocketContainer = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 10rem;
        height: 10rem;
        fill: white;
        cursor: pointer;

        &:hover {
            transition: 200ms;
            transform: rotate(-0.05turn);
        }

        &:active {
            transform: rotate(0);
            fill: rgb(144, 125, 255);
        }
    }
`;

const Navigation = () => {
    return (
        <NavigationStyle>
            <MainLinks>
                <NavlinkStyled to="#">Home</NavlinkStyled>
                <NavlinkStyled to="#">Pockett</NavlinkStyled>
                <NavlinkStyled to="#">Transfer</NavlinkStyled>
                <NavlinkStyled to="#">Community</NavlinkStyled>
            </MainLinks>
            <StyledPocketContainer>
                <Pocket />
            </StyledPocketContainer>
        </NavigationStyle>
    );
};

export default Navigation;
