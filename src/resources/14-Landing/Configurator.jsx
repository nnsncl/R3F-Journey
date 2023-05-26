import React from "react"
import styled from "styled-components"
import usePlane from "./stores/usePlane"

const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    padding: 24px;
    width: calc(100% - (24px * 2));
    height: calc(100vh - (24px * 2));

    display: grid;
    justify-content: flex-start;

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 68px;
        line-height: 1;
        letter-spacing: -3px;
    }
`
const Head = styled.hgroup`
    display: grid;
    grid-gap: 12px;
    align-self: flex-end;
    height: fit-content;
    pointer-events: auto;

    button {
        width: fit-content;
        border-radius: 24px;
        border: none;
        padding: 0 24px;
        background-color: white;

        &:hover, &:focus, &:active {
            background-color: white;
        }
    }
`
const Menu = styled.menu`
    padding: 0;
    margin: 0;
    pointer-events: auto;
    align-self: flex-end;
    width: fit-content;

    button {
        &:first-of-type {
            border-top-left-radius: 24px;
            border-bottom-left-radius: 24px;
            border-left: 1px solid white;
        }
        &:last-of-type {
            border-top-right-radius: 24px;
            border-bottom-right-radius: 24px;
            border-right: 1px solid white;
        }
    }
`
const Button = styled.button`
    all: unset;
    border: none;
    background-color: #FFFFFF60;
    backdrop-filter: blur(3px);
    border: 1px solid white;
    border-left: none;
    border-right: none;
    color: #0E0E0E60;
    font-size: 12px;
    text-align: center;
    font-weight: bold;
    min-width: 48px;
    min-height: 48px;
    padding: 0 12px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    &:hover, &:focus, &:active {
        color: #0E0E0E;
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
export const Configurator = () => {
    const variant = usePlane((state) => state.variant)
    const updateVariant = usePlane((state) => state.updateVariant)
    const getVariantName = usePlane((state) => state.getVariantName)

    return (
        <Container>
            <Head>
                <h1>Lorem Ipsum<br />Dolor sit amet</h1>
                <small>
                    Personalize your experience by chosing a model or<br />
                    <b>skip this step and go with the default one</b>
                </small>
                <Button>Start the experience</Button>
            </Head>
            <Menu>
                {[...Array(4)].map((_, key) => (
                    <Button
                        key={key}
                        onClick={() => updateVariant(`${Number(key) + 1}`)}
                        style={{
                            color: `${Number(key) + 1}` === variant && "#0E0E0E"
                        }}
                    >
                        {`${getVariantName(`${Number(key) + 1}`)}`}
                    </Button>
                ))}
            </Menu>
        </Container>
    )
}