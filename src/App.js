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

// ASSETS
import { cities } from "./Assets/data";
import Authentication from "./Pages/Authentication";
import { AuthProvider } from "./Context/AuthContext";

// APP START
const App = () => {
    const [logged, setLogged] = useState(false);
    const [cards, setCards] = useState([]);

    const newCard = () => {
        var number = {
            name: cities[Math.floor(Math.random() * cities.length)],
            cardNumber: Math.floor(Math.random() * 10000),
            cardTotal: Math.floor(Math.random() * 100000),
        };

        setCards((allcards) => [...allcards, number]);
    };

    const toggleLogged = () => {
        setLogged(!logged);
    };

    return (
        <AuthProvider>
            <Main>
                <Hero>
                    <HeroLeft>
                        <Navigation>
                            <NavigationLinkComponent
                                toProp="/"
                                linkText={`home`.toUpperCase()}
                            />
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
                                linkText={`Logged in: ${
                                    logged ? "YES" : "NO"
                                }`.toUpperCase()}
                            />
                            <NavigationLinkComponent
                                toProp="/reach"
                                linkText={`reach`.toUpperCase()}
                            />
                        </Navigation>
                    </HeroLeft>

                    <HeroRight>
                        <Switch>
                            <Route path="/" exact>
                                <Instructions />
                            </Route>
                            <Route path="/transfer">
                                <Transfer cardsState={cards} />
                            </Route>
                            <Route path="/contacts">
                                <Contacts />
                            </Route>
                            <Route path="/pocket">
                                <Pocket
                                    click={() => newCard()}
                                    cardsState={cards}
                                />
                            </Route>
                            <Route path="/authentication">
                                <Authentication />
                            </Route>
                            <Route path="/reach">
                                <Reach />
                            </Route>
                        </Switch>
                    </HeroRight>
                </Hero>
            </Main>
        </AuthProvider>
    );
};

export default App;
