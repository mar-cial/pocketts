import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavigationLinkComponent from '../Components/NavigationLinkComponent';

const NavigationStyle = styled.section`
  grid-column: 1 / 2;
  grid-row: 3 / 7;
  background: black;
  border-radius: 8px;
  display: grid;
  padding: 0.5rem;
  grid-template-rows: 1fr 5fr;

  h2 {
    color: white;
  }

  nav {
    background: white;
    display: grid;
    border-radius: 8px;
    padding: 0.5rem;
    gap: 0.5rem;
    grid-template-rows: repeat(6, 1fr);
  }
`;

const NavigationLink = styled(NavLink)`
  background: white;
  color: black;
  border-radius: 8px;
  border: 2px solid black;
  text-decoration: none;
  font-weight: bold;
  transition: 200ms;

  &:hover {
    transform: translateY(-3px);
    background: black;
    color: white;
    transition: 200ms;
  }
`;

const Navigation = () => {
  return (
    <NavigationStyle>
      <header>
        <h2>Navigation</h2>
      </header>
      <nav>
        <NavigationLinkComponent toProp="/" linkText={`home`.toUpperCase()} />
        <NavigationLinkComponent
          toProp="/transfer"
          linkText={`transfer`.toUpperCase()}
        />
        <NavigationLinkComponent
          toProp="/contacts"
          linkText={`contacts`.toUpperCase()}
        />
        <NavigationLinkComponent
          toProp="/pocket"
          linkText={`pocket`.toUpperCase()}
        />
        <NavigationLinkComponent
          toProp="/authentication"
          linkText={`logged in?: no`.toUpperCase()}
        />
        <NavigationLinkComponent
          toProp="/reach"
          linkText={`reach`.toUpperCase()}
        />
      </nav>
    </NavigationStyle>
  );
};

export default Navigation;
