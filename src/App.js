import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// SECTIONS
import Main from './Sections/Main';

// COMPONENTS
// PAGES
import Transfer from './Pages/Transfer';
import Instructions from './Pages/Instructions';
import Contacts from './Pages/Contacts';
import Pocket from './Pages/Pocket';
import Reach from './Pages/Reach';

// ASSETS
import { cities } from './Assets/data';
import Authentication from './Pages/Authentication';
import Header from './Sections/Header';
import Navigation from './Sections/Navigation';
import { AnimatePresence } from 'framer-motion';

// APP START
const App = () => {
  const [cards, setCards] = useState([]);
  const [userData, setUserData] = useState([]);
  const [hasAccount, setHasAccount] = useState(false);
  const location = useLocation();

  const newCard = () => {
    var number = {
      name: cities[Math.floor(Math.random() * cities.length)],
      cardNumber: Math.floor(Math.random() * 10000),
      cardTotal: Math.floor(Math.random() * 100000),
    };

    setCards((allcards) => [...allcards, number]);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <Main>
      <Header />
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Instructions />
          </Route>
          <Route path="/transfer">
            <Transfer userData={userData} cardsData={cards} />
          </Route>
          <Route path="/contacts">
            <Contacts userData={userData} />
          </Route>
          <Route path="/pocket">
            <Pocket cardsState={cards} click={() => newCard()} />
          </Route>
          <Route path="/authentication">
            <Authentication
              account={hasAccount}
              click={() => setHasAccount((acc) => !acc)}
            />
          </Route>
          <Route path="/reach">
            <Reach />
          </Route>
        </Switch>
      </AnimatePresence>
    </Main>
  );
};

export default App;
