import React from "react";
import { Float, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

import { SSR, EffectComposer, Vignette, Glitch, Noise, Bloom, DepthOfField } from "@react-three/postprocessing";
import { GlitchMode, BlendFunction } from "postprocessing";
import { useFrame } from "@react-three/fiber";

import BlurredVision from './Effects/BlurredVision';

export const Experience = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })
    return (
        <React.Fragment>
            {showPerfs && (<Perf position="bottom-left" visible={showPerfs} />)}
            <color args={['#212121']} attach='background' />
            <EffectComposer multisampling={8} >
                {/* <DepthOfField focusDistance={0.025} focalLength={0.025} bokehScale={6} /> */}
                {/* <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} /> */}
                {/* <Bloom mipmapBlur intensity={2} luminanceThreshold={0} /> */}
                {/* <SSR {...SSRProps} /> */}
                {/* <Glitch delay={[0.5, 1]} duration={[0.1, 0.3]} strength={[0.1, 0.2]} mode={GlitchMode.CONSTANT_WILD} /> */}
                {/* <Vignette offset={0.3} darkness={0.9} blendFunction={BlendFunction.NORMAL} /> */}
                <BlurredVision />

            </EffectComposer>

            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />


            <mesh position={[-2, 1, 0]} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color={'tomato'} />
            </mesh>
            <mesh position={[2, 1, 0]} >
                <sphereGeometry />
                <meshStandardMaterial color={'tomato'} />
            </mesh>

            <mesh position-y={-2} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="#FAFAFA" />
            </mesh>

        </React.Fragment>
    );
};
