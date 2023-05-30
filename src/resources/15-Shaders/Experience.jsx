import React from "react";
import { DoubleSide } from "three";

import { extend, useFrame } from '@react-three/fiber'
import { OrbitControls, shaderMaterial } from "@react-three/drei";

import torusFragment from './shaders/torusFragment.glsl'
import torusVertex from './shaders/torusVertex.glsl'

const NoiseMaterial = shaderMaterial(
    { uTime: 0 },
    torusVertex,
    torusFragment
)
extend({ NoiseMaterial })

export const Experience = () => {
    const shaderRef = React.useRef()

    useFrame((_, delta) => {
        shaderRef.current.uTime += delta
    })

    return (
        <React.Fragment>
            <color args={['#0E0E0E']} attach='background' />
            <OrbitControls makeDefault />

            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <mesh position={[0, 0, 0]} >
                <torusGeometry />
                <noiseMaterial
                    ref={shaderRef}
                    side={DoubleSide}
                    wireframe
                />
            </mesh>
        </React.Fragment>
    );
};
