import styled, { keyframes, css } from "styled-components"


/**
 * Animations
 */
export const fadeIn = keyframes`
   from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`
export const fadeOut = keyframes`
   from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

/**
 * Global
 */
export const ContainerStyles = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    padding: 24px;
    width: calc(100% - (24px * 2));
    height: calc(100vh - (24px * 2));

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    pointer-events: auto;
`
export const Button = styled.button`
    all: unset;
    border: none;
    background-color: #FFFFFF60;
    backdrop-filter: blur(3px);
    border: 1px solid white;
    border-left: none;
    border-right: none;
    color: #FFFFFF60;
    font-size: 12px;
    text-align: center;
    font-weight: bold;
    min-width: 48px;
    min-height: 48px;
    padding: 0 12px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    &:hover, &:focus, &:active {
        color: #FFFFFF;
    }
    &:hover {
        background-color: #FFFFFF60;
    }
    &:focus {
        background-color: #FFFFFF80;
    }
    &:active {
        background-color: #FFFFFF;
    }
`
export const Head = styled.hgroup`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;

    height: fit-content;
    animation: ${fadeIn} 1s ease-in-out;

    button {
        color: #0E0E0E60;
        width: fit-content;
        border-radius: 24px;
        border: none;
        padding: 0 24px;
        background-color: white;

        &:hover, &:focus, &:active {
            background-color: white;
            color: #0E0E0E;
        }
    }
`