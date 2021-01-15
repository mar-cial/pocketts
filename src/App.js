import React, { useState } from "react";
import Header from "./Sections/Header";
import Navigation from "./Sections/Navigation";
import Main from "./Sections/Main";
import Hero from "./Sections/Hero";
import MainButton from "./Components/MainButton";

const App = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <>
            {open ? <Navigation /> : null}
            <Header>
                <MainButton
                    text={`LOGGED IN? : ${open ? "YES" : "NO"}`}
                    click={toggleMenu}
                />
            </Header>
            <Main>
                <Hero></Hero>
            </Main>
        </>
    );
};

export default App;
