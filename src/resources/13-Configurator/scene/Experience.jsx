import React from "react";
import { Float, Sky } from "@react-three/drei";
import { Birb } from "./Birb";
import { Rock } from "./Rock";
import { Cumulus } from "./Cumulus";

export const Experience = () => {
    return (
        <React.Fragment>
            <Sky />
            <directionalLight position={[-1, 2, -3]} intensity={1} />
            <ambientLight intensity={0.5} />
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