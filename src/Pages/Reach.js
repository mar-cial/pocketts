import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { pageVariants } from '../Animations/MainAnimations';

const ReachStyle = styled(motion.section)`
  display: grid;
  gap: 1rem;

  grid-column: 2 / 5;
  grid-row: 1 / 7;
`;

const ContactInfo = styled.footer`
  background: black;
  color: white;
  border-radius: 8px;
  padding: 1rem;
  line-height: 2rem;
`;

const Reach = () => {
  return (
    <ReachStyle exit="out" animate="in" initial="out" variants={pageVariants}>
      <h1>Reach out... to me.</h1>
      <h2>What Pocketts is all about</h2>
      <p>
        I made this app, up to this point, with React Js. Styling was made with
        styled-components, everything is basically css-in-js.{' '}
      </p>
      <p>
        <b>Pocketts</b> allows you to have an electronic wallet, and by
        registering your contacts, it makes the process of transferring any
        currency more fluid.{' '}
      </p>
      <p>
        As you could tell, the app is not fully functional. All the backend is
        needed in order to log in, add contacts and upload your cards. Right now
        it is only a <b>MOCKUP</b>. I am constantly working on the front end
        logic, making it as modular as it can be.
      </p>

      <ContactInfo>
        <h3>Contact me:</h3>
        <p>Name: Mario César Marcial Quintero</p>
        <p>City: Mexicali, Baja California</p>
        <p>Experience: 2 years web dev, 1 year React Js</p>
        <p>Email: cesarmarcialq@gmail.com</p>
        <p>Whatsapp: (52) 686 288 5997</p>
      </ContactInfo>
    </ReachStyle>
  );
};

export default Reach;
