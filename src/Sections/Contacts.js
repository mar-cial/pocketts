import React, { useEffect, useState } from "react";

const Contacts = () => {
    const [userData, setUserData] = useState({});
    const theURL = "https://jsonplaceholder.typicode.com/users";
    const getUserData = async () => {
        const response = await fetch(theURL);
        const jsonData = await response.json();
        setUserData(jsonData);
        console.log(userData);
    };

    useEffect(() => {
        getUserData();
    }, []);

    return <div></div>;
};

export default Contacts;
