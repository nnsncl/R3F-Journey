import React from "react";
import { Float, OrbitControls, Sky, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { MountainRocks } from "./Mountain";
import { FieldFighter } from "./FieldFighter";

export const Experience = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })
    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}

            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <Sky />

            <Float intensity={1} speed={2}>
                <FieldFighter scale={0.1} position-y={1} />
            </Float>
            <MountainRocks position={[-0.8, -1.2, 0]} rotation-y={-Math.PI * 0.33} />
        </React.Fragment>
    );
};
