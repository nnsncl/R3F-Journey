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
            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <mesh castShadow position={[2, 1, 0]} >
                <sphereGeometry />
                <meshStandardMaterial color="ivory" />
            </mesh>

            <mesh castShadow position={[-2, 1, 0]} scale={1.5} >
                <boxGeometry />
                <meshStandardMaterial color="tomato" />
            </mesh>

            <mesh receiveShadow position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="#FFFFFF" />
            </mesh>
        </React.Fragment>
    );
};
