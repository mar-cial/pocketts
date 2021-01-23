import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  background: black;
  border-radius: 8px;
  color: white;
  padding: 0.5rem;
  grid-row: span 2;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 1.4rem;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h1>
        Pockett
        <br />
        Transfers
      </h1>
      <h2>Your number one stop for safe currency transfer.</h2>
    </HeaderStyle>
  );
};

export default Header;
