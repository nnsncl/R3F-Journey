import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, useProgress } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";

import useLanding from "./stores/useLanding";

import { Experience } from './Experience';
import { Funnel } from "./pages/Funnel"
import { Introduction } from "./pages/Introduction"

import { SpinLoader, ContainerStyles, fadeIn } from "./styles";

const Main = styled.main`
    pointer-events: none;
    color: white;

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
`;
const ScrollContainer = styled.section`
    ${ContainerStyles}
    animation: ${fadeIn} 1s ease-in-out;
`

export const Landing = () => {
    const { progress } = useProgress()

    const play = useLanding((state) => state.play)
    const end = useLanding((state) => state.end)

    // Prevent re-renders glitches
    const postProcessingEffects = React.useMemo(() => (
        <EffectComposer>
            <Noise opacity={0.3} premultiply />
        </EffectComposer>
    ), [])

    return (
        <React.Suspense fallback={
            <ScrollContainer>
                <SpinLoader />
            </ScrollContainer>
        }>

            {progress === 100 && (
                <Main>
                    <Introduction />
                    <Funnel />
                </Main>)}

            <Canvas shadows gl={{ antialias: true }}>
                <ScrollControls pages={play && !end ? 20 : 0} damping={0.5} >
                    <Experience />
                </ScrollControls>
                {postProcessingEffects}
            </Canvas>

        </React.Suspense>
    );
};
