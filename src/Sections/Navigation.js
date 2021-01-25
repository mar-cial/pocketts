import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavigationLinkComponent from '../Components/NavigationLinkComponent';

const NavigationStyle = styled.nav`
  z-index: 100;
  grid-column: 1 / 2;
  grid-row: 3 / 7;
  background: black;
  border-radius: 8px;
  display: grid;
  padding: 0.5rem;
  grid-template-rows: 1fr 5fr;
  h2 {
    color: white;
    font-size: 2rem;
  }
`;

const LinksSection = styled.section`
  background: white;
  border-radius: 8px;
  display: grid;
  padding: 1vh;
  gap: 0.5rem;
`;

const Navigation = () => {
  return (
    <NavigationStyle>
      <h2>Navigation</h2>

      <LinksSection>
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
      </LinksSection>
    </NavigationStyle>
  );
};

export default Navigation;
