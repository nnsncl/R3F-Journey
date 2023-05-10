import React from "react";
import * as THREE from 'three';
import { OrbitControls, useHelper, BakeShadows } from "@react-three/drei";
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
            {/* Calculate shadow position once */}
            <BakeShadows />
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}

            <OrbitControls makeDefault />
            <directionalLight
                ref={dl_ref}
                castShadow
                position={[1, 2, 3]}
                intensity={directional}
                shadow-mapSize={[1024, 1024]}
            // shadow-camera-near={1}
            // shadow-camera-far={10}
            // shadow-camera-top={2}
            // shadow-camera-right={2}
            // shadow-camera-bottom={-2}
            // shadow-camera-left={-2}
            />
            <ambientLight intensity={ambiant} />

            <mesh castShadow position={[spherePosition.x, spherePosition.y, 0]} visible={sphereVisible}>
                <sphereGeometry />
                <meshStandardMaterial color={sphereColor} />
            </mesh>

            <mesh castShadow position={[cubePosition.x, cubePosition.y, 0]} scale={1.5} >
                <boxGeometry />
                <meshStandardMaterial color={cubeColor} />
            </mesh>

            <mesh receiveShadow position-y={-1} rotation-x={- Math.PI * 0.5} scale={100}>
                <planeGeometry />
                <meshStandardMaterial color={floorColor} />
            </mesh>
        </React.Fragment>
    );
};
