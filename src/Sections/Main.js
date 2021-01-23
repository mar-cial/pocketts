import React from 'react';
import styled from 'styled-components';

const MainStyle = styled.main`
  height: 96vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 0.5rem;
`;

const Main = (props) => {
  return <MainStyle>{props.children}</MainStyle>;
};

export default Main;
