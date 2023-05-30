import React from "react";
import { DoubleSide } from "three";

import { extend, useFrame } from '@react-three/fiber'
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import {
    SSR,
    EffectComposer,
    Vignette,
    Glitch,
    Noise,
    Bloom,
    DepthOfField
} from "@react-three/postprocessing";

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

            <EffectComposer multisampling={8} >
                <Bloom mipmapBlur intensity={10} luminanceThreshold={0.2} />
                <Noise premultiply />
            </EffectComposer>

            <mesh position={[0, 0, 0]} >
                <torusGeometry args={[1, 0.3, 100, 100]} />
                <noiseMaterial
                    ref={shaderRef}
                    side={DoubleSide}
                // wireframe
                />
            </mesh>
        </React.Fragment>
    );
};
