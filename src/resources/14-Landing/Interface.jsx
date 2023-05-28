import React from "react"
import styled, { keyframes, css } from "styled-components"
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
const ContainerStyles = css`
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

const Container = styled.section`
    ${ContainerStyles}
    animation: ${fadeIn} 1s ease-in-out;
`
const ScrollContainer = styled.section`
    ${ContainerStyles}

    pointer-events: none;
    opacity: ${(props) => props.hasScrolled ? 0 : 1};
    animation: ${(props) => props.hasScrolled ? fadeOut : fadeIn} 1s ease-in-out;
`
const EndContainer = styled.section`
    ${ContainerStyles}

    pointer-events: auto;
    animation: ${fadeIn} 1s ease-in-out;
`
const Head = styled.hgroup`
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

export const Interface = () => {
    const variant = usePlane((state) => state.variant)
    const updateVariant = usePlane((state) => state.updateVariant)
    const getVariantName = usePlane((state) => state.getVariantName)

    const play = useLanding((state) => state.play)
    const end = useLanding((state) => state.end)
    const hasScrolled = useLanding((state) => state.hasScrolled)
    const updateStatus = useLanding((state) => state.updateStatus)

    return (
        <React.Fragment>
            {!play
                ? (<Container play={play} >
                    <Head>
                        <h1>La distribution d'assurance<br />de personne, réinventée</h1>
                        <p>Développeurs des solutions logicielles SaaS innovantes pour les acteurs de la bancassurance depuis 2013</p>

                        <Button onClick={() => updateStatus('play')} >Découvrez nos solutions</Button>
                    </Head>
                </Container>)
                : (<ScrollContainer hasScrolled={hasScrolled}>
                    <p>Faites défiler pour naviguer</p>
                </ScrollContainer>)}
            {end && (
                <EndContainer>
                    <Head>
                        <h2>Lorem Ipsum<br />Dolor sit amet</h2>
                        <small>
                            Personalize your experience by chosing a model or<br />
                            <b>skip this step and go with the default one</b>
                        </small>
                        <Button >Start the experience</Button>
                    </Head>
                </EndContainer>
            )}
            {/* <Menu>
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
                    </Menu> */}
        </React.Fragment>
    )
}