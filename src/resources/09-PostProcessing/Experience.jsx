import React from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import {
    Float,
    MeshReflectorMaterial,
    OrbitControls
} from "@react-three/drei";
import {
    SSR,
    EffectComposer,
    Vignette,
    Glitch,
    Noise,
    Bloom,
    DepthOfField
} from "@react-three/postprocessing";
import {
    GlitchMode,
    BlendFunction
} from "postprocessing";

import BlurredVision from './Effects/BlurredVision';

export const Experience = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })
    const blurredVisionProps = useControls('Blurred Vision', {
        frequency: 2,
        amplitude: 0.1,
    })
    const customPPEffectRef = React.useRef()

    return (
        <React.Fragment>
            {showPerfs && (<Perf position="bottom-left" visible={showPerfs} />)}
            <color args={['#212121']} attach='background' />

            <EffectComposer multisampling={8} >
                <BlurredVision ref={customPPEffectRef} {...blurredVisionProps} />
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
