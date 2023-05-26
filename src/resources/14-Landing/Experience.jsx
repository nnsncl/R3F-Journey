import React from "react";
import * as THREE from 'three'

import { useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls } from "@react-three/drei";

import { Background } from "./Background";
import { Plane } from "./Planes";
import { Cloud01, Cloud02 } from "./Clouds";

const LINE_POINTS_AMOUNT = 2000
export const Experience = () => {
    const curve = React.useMemo(() => {
        return new THREE.CatmullRomCurve3(
            [
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, 0, -10),
                new THREE.Vector3(-4, 0, -20),
                new THREE.Vector3(-5, 0, -30),
                new THREE.Vector3(0, 0, -40),
                new THREE.Vector3(5, 0, -50),
                new THREE.Vector3(7, 0, -60),
                new THREE.Vector3(5, 0, -70),
                new THREE.Vector3(0, 0, -80),
                new THREE.Vector3(0, 0, -90),
                new THREE.Vector3(0, 0, -100),
            ],
            false,
            "catmullrom",
            0.5)
    }, [])
    // const linePoints = React.useMemo(() => {
    //     return curve.getPoints(LINE_POINTS_AMOUNT)
    // }, [curve])
    const shape = React.useMemo(() => {
        const shape = new THREE.Shape()
        shape.moveTo(0, -0.05)
        shape.lineTo(0, 0.05)

        return shape
    }, [curve])

    return (
        <React.Fragment>
            <Background />
            <color attach="background" args={['tomato']} />

            <OrbitControls makeDefault enableZoom={true} enablePan={true} />
            <directionalLight
                position={[-2, 2, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={10}
                shadow-camera-far={10}
                shadow-camera-top={10}
                shadow-camera-right={10}
                shadow-camera-bottom={-10}
                shadow-camera-left={-10}
                color={'tomato'}
            />
            <ambientLight intensity={0.5} color={'lightblue'} />

            <group
                rotation={[0, -Math.PI * 0.5, 0]}
                position={[5, -5, -2.5]}
            >
                <mesh>
                    <extrudeGeometry
                        args={[
                            shape,
                            {
                                steps: LINE_POINTS_AMOUNT,
                                bevelEnabled: false,
                                extrudePath: curve
                            }
                        ]}
                    />
                    <meshStandardMaterial
                        color={'white'}
                        opacity={0.3}
                        transparent
                    />
                </mesh>
            </group>

            <group>
                <Float>
                    <Plane position={[0, 0, -2]} scale={0.002} />
                </Float>
                <Cloud01 position={[-10, -8, 5]} />
                <Cloud02 position={[-12, -2, -8]} rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]} />
            </group>

        </React.Fragment>
    );
};
