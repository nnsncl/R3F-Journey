import React from "react";
import styled from "styled-components";
import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

import { EffectComposer, Noise } from "@react-three/postprocessing";

import { Experience } from './Experience';
import { Configurator } from "./Configurator";

const Main = styled.main`
    pointer-events: none;
    color: white;
`;
export const Landing = () => {

    return (
        <React.Fragment>
            <Leva collapsed />
            {/* <Main>
                <Configurator />
            </Main> */}
            <Canvas
                shadows
                gl={{ antialias: true }}
            >
                <ScrollControls pages={20} damping={0.5} >
                    <Experience />
                </ScrollControls>
                <EffectComposer>
                    <Noise opacity={0.3} premultiply />
                </EffectComposer>
            </Canvas>
        </React.Fragment>

    );
};
