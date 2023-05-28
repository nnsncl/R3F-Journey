import React from "react"
import styled, { keyframes } from "styled-components"
import usePlane from "./stores/usePlane"
import useLanding from "./stores/useLanding"

const fadeIn = keyframes`
   from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`
const fadeOut = keyframes`
   from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`
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
    pointer-events: auto;
    animation: ${fadeIn} 1s ease-in-out;

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 68px;
        line-height: 1;
        letter-spacing: -3px;

        @media(max-width: 1024px){
            font-size: 36px;
            letter-spacing: -1.5px;
        }
    }
`
const Head = styled.hgroup`
    display: grid;
    grid-gap: 12px;
    align-self: flex-end;
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
const Menu = styled.menu`
    padding: 0;
    margin: 0;
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
const ScrollContainer = styled(Container)`
    pointer-events: none;
    align-items: center;
    justify-content: center;

    opacity: ${(props) => props.hasScrolled ? 0 : 1};
    animation: ${(props) => props.hasScrolled ? fadeOut : fadeIn} 1s ease-in-out;
`

export const Configurator = () => {
    const variant = usePlane((state) => state.variant)
    const updateVariant = usePlane((state) => state.updateVariant)
    const getVariantName = usePlane((state) => state.getVariantName)

    const play = useLanding((state) => state.play)
    const hasScrolled = useLanding((state) => state.hasScrolled)
    const updateStatus = useLanding((state) => state.updateStatus)

    if (!play) return (
        <Container play={play} >
            <Head>
                <h1>Lorem Ipsum<br />Dolor sit amet</h1>
                <small>
                    Personalize your experience by chosing a model or<br />
                    <b>skip this step and go with the default one</b>
                </small>
                <Button onClick={() => updateStatus('play')} >Start the experience</Button>
            </Head>
            <Menu>
                {[...Array(4)].map((_, key) => (
                    <Button
                        key={key}
                        onClick={() => updateVariant(`${Number(key) + 1}`)}
                        style={{
                            color: `${Number(key) + 1}` === variant && "#FFFFFF"
                        }}
                    >
                        {`${getVariantName(`${Number(key) + 1}`)}`}
                    </Button>
                ))}
            </Menu>
        </Container>
    )

    if (play) return (
        <ScrollContainer hasScrolled={hasScrolled}>
            <p>
                Scroll to begin the journey
            </p>
        </ScrollContainer>
    )
}