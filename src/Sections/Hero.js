import React from "react";
import styled from "styled-components";
import MainButton from "../Components/MainButton";

const HeroStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 84vh;

    h1 {
        font-size: 4rem;
    }
`;

const HeroLeft = styled.div`
    background: black;
    color: white;
    padding: 1rem;
    border-radius: 10px 0 0 10px;
`;

const HeroRibbon = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 2rem;
    gap: 1rem;
`;

const HeroRight = styled.div`
    display: grid;
    overflow: scroll;
    padding: 1rem;
`;
const Hero = (props) => {
    return (
        <HeroStyled>
            <HeroLeft>
                <h1>Pocket</h1>
                <h1>Transfers</h1>
                <h2>
                    Your number one stop for easy, fast and secure money
                    transfers.
                </h2>
                <HeroRibbon>
                    <MainButton text={"Make a transfer"} borderColor="white" />
                    <MainButton text={"Make a transfer"} borderColor="white" />
                </HeroRibbon>
            </HeroLeft>
            <HeroRight>
                <h1>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sit amet condimentum neque. Nunc vel neque fermentum,
                    hendrerit arcu quis, mollis libero. Mauris dapibus eros ut
                    dui ornare sodales. Nunc tincidunt eu odio ut commodo. Cras
                    vulputate odio sit amet eros maximus cursus. Vestibulum
                    posuere enim augue, a elementum lacus placerat eu. Nullam
                    vehicula eget nunc vitae cursus. Aenean maximus massa a
                    sollicitudin dapibus. Suspendisse sed metus sit amet augue
                    tincidunt pretium. Aliquam varius elit vitae odio dignissim
                    fringilla. Fusce ac ligula sagittis, porttitor justo sed,
                    sodales diam. Donec bibendum felis eget nulla gravida
                    tristique. In ornare nibh vel cursus porta. Etiam ipsum
                    orci, molestie eget neque quis, iaculis ullamcorper nunc.
                    Nulla vel commodo erat. Nulla accumsan nisl a enim molestie
                    consectetur. Pellentesque commodo urna sed aliquet dictum.
                    Ut at lacus gravida, mollis nunc a, aliquam neque.
                    Suspendisse justo neque, porta porta leo a, rutrum mattis
                    neque. Nullam pretium nisi vel turpis tempor, et mattis dui
                    molestie. Suspendisse potenti. Aenean et nulla leo.
                    Vestibulum eu commodo neque. Donec sollicitudin turpis
                    ligula, eget luctus velit commodo eu. Quisque finibus eu
                    nisi id elementum. Cras elementum vehicula nunc, venenatis
                    euismod dui pellentesque ut. Integer ac dolor placerat,
                    suscipit lorem nec, hendrerit lectus.{" "}
                </h1>
            </HeroRight>
        </HeroStyled>
    );
};

export default Hero;
