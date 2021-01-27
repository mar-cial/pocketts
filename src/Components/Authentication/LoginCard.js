import React from 'react';
import styled from 'styled-components';

const LoginCardStyle = styled.form`
  display: grid;
  padding: 1rem;
  border: 2px solid black;
  border-radius: 8px;
  gap: 1rem;
  grid-template-rows: repeat(7, 1fr);

  input {
    padding: 0.6rem;
  }

  button {
    padding: 1rem;
    border: 2px solid black;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    background: black;
    transition: 200ms;
    cursor: pointer;

    grid-row: 7 / 8;
    &:hover {
      background: white;
      color: black;
      transition: 200ms;
      transform: translateY(-5px);
    }

    &:active {
      background: black;
      color: white;
      transform: translateY(0);
    }
  }
`;

const LoginCard = () => {
  return (
    <LoginCardStyle>
      <h2>Log in</h2>
      <h3>Email</h3>
      <input type="email" required />
      <h3>Password</h3>
      <input type="password" required />
      <button type="submit">Sign up</button>
    </LoginCardStyle>
  );
};

export default LoginCard;
