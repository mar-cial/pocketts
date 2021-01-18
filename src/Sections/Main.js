import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
    height: 95vh;
    padding: 2.5vh;
`;

const Main = (props) => {
    return <MainContainer>{props.children}</MainContainer>;
};

export default Main;
