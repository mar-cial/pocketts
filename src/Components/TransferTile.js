import React from 'react';
import styled from 'styled-components';

const TransferTileStyle = styled.article`
  display: grid;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 8px;

  &:hover {
    transform: scale(1.025);
    transition: 200ms;
    cursor: pointer;
  }

  &:active {
    background: black;
    color: white;
    transform: scale(1);
  }
`;

const TransferTile = (props) => {
  return (
    <TransferTileStyle>
      <h2>{props.name}</h2>
      <h3>{props.username}</h3>
      <span>{props.email}</span>
    </TransferTileStyle>
  );
};

export default TransferTile;
