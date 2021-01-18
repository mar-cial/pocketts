import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
    display: grid;
    gap: 1rem;
    padding: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    border-bottom: 0.5px solid gray;
    transition: 200ms;

    span {
        font-weight: bold;
        font-size: 3rem;
        grid-column: 1 / -2;
        align-self: center;
        cursor: pointer;

        &:hover {
            color: rgb(144, 125, 255);
            transition: 200ms;
        }

        &:active {
            color: rgb(122, 100, 255);
        }
    }
`;

const Header = (props) => {
    return (
        <HeaderStyle>
            <span>Pocketts</span>
            {props.children}
        </HeaderStyle>
    );
};

export default Header;
