import React from 'react'
import styled from 'styled-components'

const PocketStyle = styled.section`
    display: grid;
    grid-template-rows: 1fr 3fr 3fr 3fr;
    height: 100%;
`

const Pocket = () => {

    return (
        <PocketStyle>
            <h1>Pocket</h1>
            <div><h2>second</h2></div>
            <div><h2>third</h2></div>
        </PocketStyle>
    )
}

export default Pocket
