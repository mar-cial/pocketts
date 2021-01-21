import React from "react";
import styled from "styled-components";
import SignupCard from "../Components/Authentication/SignupCard";

const AuthenticationStyle = styled.section`
    display: grid;
    grid-template-rows: 1fr 7fr 1fr;
    gap: 1rem;
    max-height: 95vh;
`;

const SwitchAuthButton = styled.button`
    border: 2px solid black;
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: black;
        color: white;
        transition: 200ms;
        transform: translateY(-5px);
    }

    &:active {
        background: white;
        color: black;
        transform: translateY(0);
    }
`;

const Authentication = () => {
    return (
        <AuthenticationStyle>
            <h1>Authentication</h1>
            <SignupCard />
            <SwitchAuthButton>Already have an account? Log in</SwitchAuthButton>
        </AuthenticationStyle>
    );
};

export default Authentication;
