import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export const Experience = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })

    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}
            <color args={['#FFFFFF']} attach='background' />
            <EffectComposer multisampling={8}>
                <Vignette offset={0.3} darkness={0.9} blendFunction={BlendFunction.NORMAL} />
            </EffectComposer>

            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <mesh position={[2, 1, 0]} >
                <sphereGeometry />
                <meshStandardMaterial color="ivory" />
            </mesh>

            <mesh position={[-2, 1, 0]} scale={1.5} >
                <boxGeometry />
                <meshStandardMaterial color="tomato" />
            </mesh>

            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>

        </React.Fragment>
    );
};
