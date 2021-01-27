import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { pageVariants } from '../Animations/MainAnimations';
import LoginCard from '../Components/Authentication/LoginCard';
import SignupCard from '../Components/Authentication/SignupCard';

const AuthenticationStyle = styled(motion.section)`
  display: grid;
  grid-template-rows: 1fr 7fr 1fr;
  gap: 1rem;
  max-height: 95vh;

  grid-column: 2 / 5;
  grid-row: 1 / 7;
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

const Authentication = (props) => {
  return (
    <AuthenticationStyle
      exit="out"
      animate="in"
      initial="out"
      variants={pageVariants}
    >
      <h1>Authentication</h1>

      {/* <SignupCard /> */}
      {props.account ? <LoginCard /> : <SignupCard />}
      <SwitchAuthButton onClick={props.click}>
        {props.account
          ? "Don't have an account? Sign up."
          : 'Already have an account? Log in.'}
      </SwitchAuthButton>
    </AuthenticationStyle>
  );
};

export default Authentication;
