import React from "react";
import * as THREE from 'three'

import { useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, PerspectiveCamera, ScrollControls, Text, useScroll } from "@react-three/drei";

import { Background } from "./Background";
import { Plane } from "./Planes";
import { Cloud01, Cloud02 } from "./Clouds";
import { useControls } from "leva";

const LINE_POINTS_AMOUNT = 1000
const CURVE_DISTANCE = 250
const CURVE_AHEAD_CAMERA = 0.008
const CURVE_AHEAD_PLANE = 0.02
const PLANE_MAX_ANGLE = 35

export const Experience = () => {
    const plane = React.useRef()
    const cameraGroup = React.useRef()
    const scroll = useScroll()

    const curve = React.useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, -CURVE_DISTANCE),
            new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
            new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
            new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
        ], false, "catmullrom", 0.5)
    }, [])

    const linePoints = React.useMemo(() => {
        return curve.getPoints(LINE_POINTS_AMOUNT)
    }, [curve])

    const shape = React.useMemo(() => {
        const memoized = new THREE.Shape()
        memoized.moveTo(0, -0.01)
        memoized.lineTo(0, 0.1)

        return memoized
    }, [curve])

    useFrame((_, delta) => {
        const scrollOffset = Math.max(0, scroll.offset)
        const currentPoint = curve.getPoint(scrollOffset)
        cameraGroup.current.position.lerp(currentPoint, delta * 24) // Follow the curve points

        const lookAtPoint = curve.getPoint(Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1))
        const currentLookAt = cameraGroup.current
            .getWorldDirection(new THREE.Vector3())

        const targetLookAt = new THREE.Vector3()
            .subVectors(currentPoint, lookAtPoint)
            .normalize()

        const lookAt = currentLookAt.lerp(targetLookAt, delta * 24)
        cameraGroup.current.lookAt(cameraGroup.current.position.clone().add(lookAt))

        const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_PLANE)
        const nonLerpLookAt = new THREE.Group()
        nonLerpLookAt.position.copy(currentPoint)
        nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt))

        tangent.applyAxisAngle(new THREE.Vector3(0, 1, 0), -nonLerpLookAt.rotation.y)

        let angle = Math.atan2(-tangent.z, tangent.x)
        angle = -Math.PI / 2 + angle

        let angleDegrees = (angle * 180) / Math.PI
        angleDegrees *= 2.4 // Stronger angle

        if (angleDegrees < 0) {
            angleDegrees = Math.max(angleDegrees, -PLANE_MAX_ANGLE)
        }
        if (angleDegrees > 0) {
            angleDegrees = Math.min(angleDegrees, PLANE_MAX_ANGLE)
        }

        // Set angle back to radiant
        angle = (angleDegrees * Math.PI) / 180

        const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(plane.current.rotation.x, plane.current.rotation.y, angle)
        )
        plane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 24)
    })

    return (
        <React.Fragment>
            <color attach="background" args={['tomato']} />

            <directionalLight
                position={[0, 3, 1]}
                intensity={0.1}
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

            {/* <OrbitControls /> */}

            {/* Camera Group / Plane */}
            <group ref={cameraGroup} >
                <Background />
                <PerspectiveCamera
                    makeDefault
                    position={[0, 1, 12]}
                    fov={45}
                    near={0.1}
                    far={200}
                />
                <group ref={plane}>
                    <Float
                        floatIntensity={0.5}
                        rotationIntensity={0.5}
                        speed={0.5}
                    >
                        <Plane
                            rotation={[Math.PI * 0.5, 0, -Math.PI * 0.51]}
                            position={[0, 1, 0]}
                            scale={0.002}
                        />
                    </Float>
                </group>
            </group>

            {/* Text */}
            <group position={[-5, 0, -40]} >
                <Text
                    color={'white'}
                    anchorX={'left'}
                    anchorY={'top'}
                    fontSize={0.5}
                    maxWidth={2.5}
                >
                    Services
                </Text>
                <Text
                    color={'white'}
                    anchorX={'left'}
                    anchorY={'top'}
                    position-y={-0.5}
                    fontSize={0.22}
                    maxWidth={2.5}
                >
                    Lorem ipsum dolor sit amet
                </Text>
            </group>


            {/* Curved Path */}
            <group position={[0, -2, 0]} >
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

            {/* Initial Clouds */}
            <group rotation={[0, Math.PI * 0.6, 0]} >
                <Cloud02 scale={1.5} position={[24, 2, -16]} rotation={[-Math.PI * 0.25, Math.PI * 0.25, 0]} />
                <Cloud01 position={[14, -6, -12]} rotation={[-Math.PI * 0.5, 0, 0]} />

                <Cloud02 scale={1.2} position={[6, 0, 24]} rotation={[-Math.PI * 0.75, 0, 0]} />
                <Cloud01 position={[2, -6, 16]} rotation={[-Math.PI * 0.5, 0, 0]} />
            </group>

            {/* Scene Clouds */}
            <group rotation={[0, Math.PI * 0.6, 0]} >
                {/*
                <Cloud02 scale={1.2} position={[6, 0, 24]} rotation={[-Math.PI * 0.75, 0, 0]} />
                <Cloud01 position={[2, -6, 16]} rotation={[-Math.PI * 0.5, 0, 0]} /> */}
            </group>

        </React.Fragment>
    );
};
