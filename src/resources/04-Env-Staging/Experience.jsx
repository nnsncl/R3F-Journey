import React from "react";
import * as THREE from 'three';
import { OrbitControls, useHelper, BakeShadows, SoftShadows } from "@react-three/drei";
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
    // SoftShadows({
    //     frustum: 3.75,
    //     size: 0.005,
    //     near: 9.5,
    //     samples: 16,
    //     rings: 12
    // })
    return (
        <React.Fragment>
            {/* Calculate shadow position once */}
            <BakeShadows />
            <SoftShadows
                size={10}
                samples={10}
                focus={0}
            />
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
                shadow-camera-near={1}
                shadow-camera-far={10}
                shadow-camera-top={5}
                shadow-camera-right={5}
                shadow-camera-bottom={-5}
                shadow-camera-left={-5}
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
