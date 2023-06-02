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
        shaderShape.current.rotation.y += Math.PI * (delta * 0.05);
    })

    return (
        <React.Fragment>
            <color args={['#0E0E0E']} attach='background' />

            <Environment preset="night" resolution={8} />
            <directionalLight position={[0, 3, 1]} intensity={0.1} color={'#FFFFFF'} />
            <ambientLight intensity={0.5} color={'#FFFFFF'} />

            <EffectComposer multisampling={16} >
                <Bloom mipmapBlur intensity={8} luminanceThreshold={0.1} />
                <DepthOfField focusDistance={0.015} focalLength={0.015} bokehScale={6} />
                <Noise opacity={0.05} />
            </EffectComposer>

            <PresentationControls
                global
                config={{ mass: 2, tension: 2000 }}
                snap={{ mass: 4, tension: 2000 }}
                polar={[-0.2, 0.2]}
                azimuth={[-Math.PI / 3, Math.PI / 3]}
            >
                <group ref={shaderShape} >
                    <Float floatIntensity={2} speed={2} >
                        <mesh position={[0, 0, 0]} scale={1} rotation={[Math.PI * 0.5, Math.PI * 0.25, 0]}>
                            <torusGeometry args={[1, 0.2, 256, 256]} />
                            <noiseMaterial ref={noiseShaderRef} />
                        </mesh>
                    </Float>
                </group>
                <mesh position={[0, -2, 0]} >
                    <cylinderGeometry />
                    <meshStandardMaterial color={'#000000'} metalness={1} roughness={0.2} />
                </mesh>
            </PresentationControls>

        </React.Fragment>
    );
};
