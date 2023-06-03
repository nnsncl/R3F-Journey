import React from "react";

import { extend, useFrame } from '@react-three/fiber'
import { Environment, Float, PresentationControls, shaderMaterial } from "@react-three/drei";
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

    useFrame((state, delta) => {
        noiseShaderRef.current.uTime += delta
        // shaderShape.current.rotation.y += Math.PI * (delta * state.mouse.x)
    })

    return (
        <React.Fragment>
            <color args={['#0E0E0E']} attach='background' />

            <EffectComposer multisampling={8} >
                <Bloom mipmapBlur intensity={10} luminanceThreshold={0.2} />
                <DepthOfField focusDistance={0.03} focalLength={0.03} bokehScale={10} />
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
                <group ref={shaderShape} >
                    <Float rotationIntensity={2} speed={2} >
                        <mesh position={[0, 0, 0]} scale={0.6} >
                            <torusGeometry args={[1, 0.3, 256, 256]} />
                            <noiseMaterial ref={noiseShaderRef} side={DoubleSide} />
                        </mesh>
                    </Float>
                </group>

                <mesh position={[0, -2, 0]} rotation={[-0.2, 0, 0]}>
                    <cylinderGeometry />
                    <meshStandardMaterial color={'#0E0E0E'} metalness={1} roughness={0.1} />
                </mesh>
            </PresentationControls>
        </React.Fragment>
    );
};
