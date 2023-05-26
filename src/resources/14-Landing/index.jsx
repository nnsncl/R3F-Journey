import React from "react";
import styled from "styled-components";
import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import { sRGBEncoding, ACESFilmicToneMapping } from 'three'

import { Experience } from './Experience';
import { Configurator } from "./Configurator";

const Main = styled.main`
    pointer-events: none;
`;
export const Landing = () => {

    return (
        <React.Fragment>
            <Leva collapsed />
            <Main>
                <Configurator />
            </Main>
            <Canvas
                shadows
                gl={{
                    antialias: true,
                    toneMapping: ACESFilmicToneMapping,
                    outputEncoding: sRGBEncoding
                }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [8, 2, 0]
                }}
            >
                <Experience />
            </Canvas>
        </React.Fragment>

    );
};
