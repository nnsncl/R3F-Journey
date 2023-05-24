import React from "react";
import { Float, Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { Birb } from "./Birb";
import { Rock } from "./Rock";
import { Cumulus } from "./Cumulus";
import { Crown } from "./Crown";

export const Experience = () => {
    useFrame((state) => {
        state.camera.position.lerp({
            x: -10 + state.pointer.x * 0.05,
            y: state.pointer.y * 0.05,
            z: -(state.pointer.x * 0.05)
        }, 1)
    })


    return (
        <React.Fragment>
            <Sky sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
            <directionalLight position={[-1, 2, -3]} intensity={1} />
            <ambientLight intensity={0.5} />
            <hemisphereLight intensity={0.5} color="#FAFAFA" position={[0, 1, 0]} />

            <Crown position={[-1.5, 2.3, 2.5]} scale={0.6} />
            <Birb
                scale={0.5}
                position={[-1.35, 0.75, 2.1]}
                rotation={[0, Math.PI * 0.25, 0]}
            />
            <Float floatIntensity={0.5} speed={0.5}>
                <Cumulus
                    scale={3}
                    position={[0, -0.5, 1.5]}
                    rotation={[0, -Math.PI * 0.5, 0]}
                />
            </Float>
            <Rock scale={5} position={[2, -6, 0]} />
        </React.Fragment>
    );
};