import React from "react"
import styled from "styled-components"
import { Navigation } from "./components/Navigation";
import { Configurator } from "./components/Configurator";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width:  calc(100% - (24px * 2));
    height:  calc(100vh - (24px * 2));
    padding: 24px;
    color: white;
    z-index: 10;
    /* pointer-events: none; */
    /* overflow-y: scroll;
    overflow-x: hidden; */

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }
`;

export const Interface = () => {

    return (
        <Main>
            <Navigation />
            <Configurator />
        </Main>
    )
}