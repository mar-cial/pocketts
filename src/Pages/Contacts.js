import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddNewContact from "../Components/AddNewContact";

import ContactCard from "../Components/ContactCard";

const ContactsPageContainer = styled.section`
    display: grid;
    gap: 1rem;
`;

const Contacts = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUserData(data));
    }, []);

    return (
        <ContactsPageContainer>
            <AddNewContact />
            {userData.map((e, i) => {
                return (
                    <ContactCard
                        key={i}
                        name={e.name}
                        username={`@${e.username}`}
                        email={e.email}
                    />
                );
            })}
        </ContactsPageContainer>
    );
};

export default Contacts;
