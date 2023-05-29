import React from "react"
import styled from "styled-components"
import {
    fadeIn,
    ContainerStyles,
    Head,
    Button
} from '../styles'
import useLanding from "../stores/useLanding"

const EndContainer = styled.section`
    ${ContainerStyles}

    backdrop-filter: blur(36px);
    pointer-events: auto;
    animation: ${fadeIn} 1s ease-in-out;
`

export const Funnel = () => {
    const end = useLanding((state) => state.end)

    return (
        <React.Fragment>
            {end && (
                <EndContainer>
                    <Head>
                        <h1>Demandez une démonstration</h1>
                        <p>Accélérez votre développement avec nos outill SaaS,<br />déjà éprouvé auprès des grands réseaux de distribution d'assurance depuis plus de 4 ans</p>
                        <Button>Contactez-nous</Button>
                    </Head>
                </EndContainer>
            )}
        </React.Fragment>
    )
}