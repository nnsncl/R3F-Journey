import React from "react";
import * as THREE from 'three';
import { OrbitControls, useHelper } from "@react-three/drei";
import { DebugControls } from "./Debug";
import { Perf } from "r3f-perf";

export const Experience = () => {
    const {
        showPerfs,
        ambiant,
        directional,
        spherePosition,
        sphereColor,
        sphereVisible,
        cubePosition,
        cubeColor,
        floorColor,
    } = DebugControls()
    const dl_ref = React.useRef();
    useHelper(dl_ref, THREE.DirectionalLightHelper, 1)

    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}

            <OrbitControls makeDefault />
            <directionalLight ref={dl_ref} position={[1, 2, 3]} intensity={directional} />
            <ambientLight intensity={ambiant} />

            <mesh position={[spherePosition.x, spherePosition.y, 0]} visible={sphereVisible}>
                <sphereGeometry />
                <meshStandardMaterial color={sphereColor} />
            </mesh>

            <mesh position={[cubePosition.x, cubePosition.y, 0]} scale={1.5} >
                <boxGeometry />
                <meshStandardMaterial color={cubeColor} />
            </mesh>

            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color={floorColor} />
            </mesh>
        </React.Fragment>
    );
};
