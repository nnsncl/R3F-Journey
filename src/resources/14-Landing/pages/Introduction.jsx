import React from "react"
import styled from "styled-components"
import {
    fadeIn,
    fadeOut,
    ContainerStyles,
    Head,
    Button
} from '../styles'
import usePlane from "../stores/usePlane"
import useLanding from "../stores/useLanding"


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
const Menu = styled.menu`
    position: fixed;
    bottom: 24px;
    right: 36px;
    z-index: 10;

    padding: 0;
    margin: 0;
    align-self: flex-end;
    width: fit-content;
    animation: ${fadeIn} 1s ease-in-out;

    pointer-events: auto;

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

export const Introduction = () => {
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

            {(play && !end && hasScrolled) && (
                <React.Fragment>
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
                </React.Fragment>
            )}
        </React.Fragment>
    )
}