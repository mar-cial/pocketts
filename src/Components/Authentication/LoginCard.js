import React from 'react';
import styled from 'styled-components';

const LoginCardStyle = styled.form`
  display: grid;
  padding: 1rem;
  border: 2px solid black;
  border-radius: 8px;
  gap: 1rem;
`;

const LoginCard = () => {
  return <LoginCardStyle></LoginCardStyle>;
};

export default LoginCard;
