import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";

import { Experience } from './Experience';
import { Interface } from "./Interface";

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
export const Landing = () => {

    return (
        <React.Suspense fallback={null}>
            <Main>
                <Interface />
            </Main>
            <Canvas shadows gl={{ antialias: true }}>
                <ScrollControls pages={20} damping={0.5} >
                    <Experience />
                </ScrollControls>
                <EffectComposer>
                    <Noise opacity={0.3} premultiply />
                </EffectComposer>
            </Canvas>
        </React.Suspense>

    );
};
