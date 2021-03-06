import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const SignupCardStyle = styled.form`
  display: grid;
  padding: 1rem;
  border: 2px solid black;
  border-radius: 8px;
  gap: 1rem;

  input {
    padding: 0.6rem;
  }

  button {
    padding: 1rem;
    border: 2px solid black;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    background: black;
    transition: 200ms;
    cursor: pointer;
    &:hover {
      background: white;
      color: black;
      transition: 200ms;
      transform: translateY(-5px);
    }

    &:active {
      background: black;
      color: white;
      transform: translateY(0);
    }
  }
`;

const SignupCard = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  return (
    <>
      <SignupCardStyle onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        {error && alert(error)}
        <h3>Email</h3>
        <input type="email" ref={emailRef} required />
        <h3>Password</h3>
        <input type="password" ref={passwordRef} required />
        <h3>Repeat password</h3>
        <input type="password" ref={passwordConfirmRef} required />
        <button disabled={loading} type="submit">
          Sign up
        </button>
      </SignupCardStyle>
    </>
  );
};

export default SignupCard;
