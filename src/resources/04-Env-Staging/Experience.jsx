import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import {
    OrbitControls,
    useHelper,
    AccumulativeShadows,
    BakeShadows,
    SoftShadows,
    Float,
    RandomizedLight,
    ContactShadows,
} from "@react-three/drei";
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
        contactShadowColor,
        contactShadowOpacity,
        contactShadowBlur,
    } = DebugControls()
    const dl_ref = React.useRef();
    // useHelper(dl_ref, THREE.DirectionalLightHelper, 1)

    return (
        <React.Fragment>
            {/* Calculate shadow position once */}
            {/* <BakeShadows /> */}
            {/* <SoftShadows
                size={10}
                samples={10}
                focus={0}
            /> */}
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}

            <OrbitControls makeDefault />

            {/* <AccumulativeShadows
                position={[0, -0.99, 0]}
                scale={10}
                color="#d5c197"
                opacity={0.6}
                frames={Infinity}
                blend={200}
                temporal
            >
                <RandomizedLight
                    castShadow
                    intensity={1}
                    amount={8}
                    radius={1}
                    ambient={0.5}
                    bias={0.001}
                    position={[1, 2, 3]}
                />
            </AccumulativeShadows> */}

            <ContactShadows
                position={[0, -0.99, 0]}
                color={contactShadowColor}
                opacity={contactShadowOpacity}
                blur={contactShadowBlur}
                far={5}
            />

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

            <Float speed={10} floatIntensity={1}>
                <mesh castShadow position={[spherePosition.x, spherePosition.y, 0]} visible={sphereVisible}>
                    <sphereGeometry />
                    <meshStandardMaterial color={sphereColor} />
                </mesh>
            </Float>

            <Float speed={5} floatIntensity={2}>
                <mesh castShadow position={[cubePosition.x, cubePosition.y, 0]} scale={1.5} >
                    <boxGeometry />
                    <meshStandardMaterial color={cubeColor} />
                </mesh>
            </Float>

            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color={floorColor} />
            </mesh>
        </React.Fragment>
    );
};
