import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
    height: 82vh;
    padding: 1rem;
`;

const Main = (props) => {
    return <MainContainer>{props.children}</MainContainer>;
};

export default Main;
