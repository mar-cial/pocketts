import React from 'react';
import styled from 'styled-components';

const CardRowStyle = styled.div`
  display: grid;
  gap: 0.6rem;
  border-radius: 8px;
  border: 2px solid black;

  background: white;
  padding: 0.6rem;
  grid-auto-flow: column;
  overflow: auto;
  white-space: pre-line;
  grid-auto-columns: minmax(130px, 1fr);
`;

const CardRow = (props) => {
  return <CardRowStyle>{props.children}</CardRowStyle>;
};

export default CardRow;
