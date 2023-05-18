import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

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

            <mesh position={[0, 0, 0]} scale={1.5} >
                <boxGeometry />
                <meshStandardMaterial color="tomato" />
            </mesh>
        </React.Fragment>
    );
};
