import React from 'react'
import styled from 'styled-components'

const TransferStyle = styled.article`
    display: grid; 
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 0.5rem;
    height: 100%;
`

const ChooseFriendContainer = styled.article`
    grid-column: 1 / 3;
    grid-row: 1 / -2;
    border: 3px solid black;
    border-radius: 8px;
    display: grid;
    padding: 1rem;
    gap: 1rem;

    header {
        h2 {
            font-size: 2.5rem;
        }
    }


`

const ChooseCardContainer = styled.article`
    grid-column: 3 / 7;
    grid-row: 1 / 3;
    border: 3px solid black;
    border-radius: 8px;
    display: grid;
    padding: 1rem;
    gap: 1rem;

    header {
        h2 {
            font-size: 2.5rem;
        }
    }

`

const ChooseAmountContainer = styled.article`
    grid-column: 3 / -1;
    grid-row: 3 / 5;
    border: 3px solid black;
    border-radius: 8px;
    display: grid;
    padding: 1rem;
    gap: 1rem;

    header {
        h2 {
            font-size: 2.5rem;
        }
    }
`

const ResetContainer = styled.article`
    grid-column: 3 / -1;
    grid-row: 5 / 6;
    border: 3px solid black;
    border-radius: 8px;
    display: grid;
    padding: 1rem;
    gap: 1rem;

    header {
        h2 {
            font-size: 2.5rem;
        }
    }
`

const TransferContainer = styled.section`
    grid-column: span 6;
    grid-row: span 1;
    border: 3px solid black;
    border-radius: 8px;
    transition: 200ms;
    cursor: pointer;
    display: grid;
    place-items: center;
    background: black;
    color: white;

    span {
        font-size: 3rem;
        font-weight: bold;
    }
    
    &:hover {
        transform: translateY(-5px);
        transition: 200ms;
        color: black;
        background: white;
    }

    &:active {
        transform: translateY(0);
        background: black;
        color: white;
    }
`

const Transfer = () => {
    return (
        <TransferStyle>
            <ChooseFriendContainer>
                <header>
                    <h2>Contacts</h2>
                </header>
            </ChooseFriendContainer>
            <ChooseCardContainer>
                <header>
                    <h2>Cards</h2>
                </header>
            </ChooseCardContainer>
            <ChooseAmountContainer>
                <header>
                    <h2>Amount</h2>
                </header>
            </ChooseAmountContainer>
            <ResetContainer>
                <header>
                    <h2>Reset</h2>
                </header>
            </ResetContainer>
            <TransferContainer>
                <span>{"transfer".toUpperCase()}</span>
            </TransferContainer>
        </TransferStyle>
    )
}

export default Transfer
