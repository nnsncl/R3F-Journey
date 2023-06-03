import React from "react";

import { extend, useFrame } from '@react-three/fiber'
import { Environment, Float, OrbitControls, PresentationControls, shaderMaterial } from "@react-three/drei";
import {
    EffectComposer,
    Noise,
    Bloom,
    DepthOfField
} from "@react-three/postprocessing";

import noiseVertex from './shaders/noiseVertex.glsl'
import noiseFragment from './shaders/noiseFragment.glsl'
import { DoubleSide } from "three";

const NoiseMaterial = shaderMaterial(
    { uTime: 0 },
    noiseVertex,
    noiseFragment
)
extend({ NoiseMaterial })

export const Experience = () => {
    const noiseShaderRef = React.useRef()
    const shaderShape = React.useRef()

    useFrame((_, delta) => {
        noiseShaderRef.current.uTime += delta
        shaderShape.current.rotation.y += Math.PI * (delta * 0.1)
    })

    return (
        <React.Fragment>
            <color args={['#0E0E0E']} attach='background' />

            <EffectComposer multisampling={16} >
                <Bloom mipmapBlur intensity={5} luminanceThreshold={0.1} />
                <Noise premultiply />
            </EffectComposer>

            <Environment preset="city" resolution={16} />

            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <PresentationControls
                global
                config={{ mass: 2, tension: 2000 }}
                snap={{ mass: 4, tension: 2000 }}
                polar={[-0.2, 0.2]}
                azimuth={[-Math.PI / 3, Math.PI / 3]}
            >
                <group ref={shaderShape} position={[0, 0, 0]} >
                    <Float rotationIntensity={2} speed={2} >
                        <mesh scale={0.8} rotation-y={-Math.PI * 0.75} >
                            <torusGeometry args={[1, 0.3, 1024, 1024]} />
                            <noiseMaterial ref={noiseShaderRef} side={DoubleSide} />
                        </mesh>
                    </Float>
                </group>
            </PresentationControls>
        </React.Fragment>
    );
};
