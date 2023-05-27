import React from "react";
import styled from "styled-components";
import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

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
            </Canvas>
        </React.Fragment>

    );
};
