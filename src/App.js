import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// SECTIONS
import Main from "./Sections/Main";
import Hero from "./Sections/Hero";

// COMPONENTS
import HeroLeft from "./Components/HeroLeft";
import HeroRight from "./Components/HeroRight";
import Navigation from "./Components/Navigation";
import NavigationLinkComponent from "./Components/NavigationLinkComponent";

// PAGES
import Transfer from "./Pages/Transfer";
import Instructions from "./Pages/Instructions";
import Contacts from "./Pages/Contacts";
import Pocket from "./Pages/Pocket";
import Reach from "./Pages/Reach";
import Login from "./Pages/Login";

// APP START
const App = () => {
    const [logged, setLogged] = useState(false);

    const toggleLogged = () => {
        setLogged(!logged)
    }

    return (
        <>
            <Main>
                <Hero>
                    <HeroLeft>
                        <Navigation>
                            <NavigationLinkComponent toProp="/" linkText={`home`.toUpperCase()} />
                            <NavigationLinkComponent toProp="/transfer" linkText={`transfer`.toUpperCase()} />
                            <NavigationLinkComponent toProp="/contacts" linkText={`contacts`.toUpperCase()} />
                            <NavigationLinkComponent toProp="/pocket" linkText={`pocket`.toUpperCase()} />
                            <NavigationLinkComponent toProp="/login" linkText={`Logged in: ${logged ? "YES" : "NO"}`.toUpperCase()} click={() => toggleLogged()} />
                            <NavigationLinkComponent toProp="/reach" linkText={`reach`.toUpperCase()} />
                        </Navigation>
                    </HeroLeft>
                    <HeroRight>
                        <Switch>
                            <Route path="/" exact>
                                <Instructions />
                            </Route>
                            <Route path="/transfer">
                                <Transfer />
                            </Route>
                            <Route path="/contacts">
                                <Contacts />
                            </Route>
                            <Route path="/pocket">
                                <Pocket />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/reach">
                                <Reach />
                            </Route>
                        </Switch>
                    </HeroRight>
                </Hero>
            </Main>
        </>
    );
};

export default App;
