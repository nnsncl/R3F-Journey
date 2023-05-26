import React from "react";
import * as THREE from 'three'

import { useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, PerspectiveCamera, ScrollControls, useScroll } from "@react-three/drei";

import { Background } from "./Background";
import { Plane } from "./Planes";
import { Cloud01, Cloud02 } from "./Clouds";
import { useControls } from "leva";

const LINE_POINTS_AMOUNT = 1000
export const Experience = () => {
    const curve = React.useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(-1, 0, -10),
            new THREE.Vector3(-2, 0, -20),
            new THREE.Vector3(-4, 0, -30),
            new THREE.Vector3(0, 0, -40),
            new THREE.Vector3(3, 0, -50),
            new THREE.Vector3(5, 0, -60),
            new THREE.Vector3(3, 0, -70),
            new THREE.Vector3(0, 0, -80),
            new THREE.Vector3(0, 0, -90),
            new THREE.Vector3(0, 0, -100),
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

    const { position, rotation } = useControls('camera', {
        position: {
            value: { x: 0, y: 0, z: 0 }
        },
        rotation: {
            value: { x: 0, y: 0, z: 0, }
        },
    })

    const plane = React.useRef()
    const cameraGroup = React.useRef()
    const scroll = useScroll()
    useFrame((_, delta) => {
        const currentPointIndex = Math.min(Math.round(scroll.offset * linePoints.length), linePoints.length - 1)
        const currentPoint = linePoints[currentPointIndex]
        const pointAhead = linePoints[Math.min(currentPointIndex + 1), linePoints.length - 1]
        const xDisplacement = (pointAhead.x - currentPoint.x) * 50
        const angleRotation = (xDisplacement < 0 ? 1 : -1) * Math.min(Math.abs(xDisplacement), Math.PI * 0.1)
        const targetQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
                plane.current.rotation.x,
                plane.current.rotation.y,
                angleRotation
            )
        )
        const cameraQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
                cameraGroup.current.rotation.x,
                angleRotation,
                cameraGroup.current.rotation.z
            )
        )

        plane.current.quaternion.slerp(targetQuaternion, delta * 0.5)
        cameraGroup.current.quaternion.slerp(cameraQuaternion, delta * 0.5)
        cameraGroup.current.position.lerp(currentPoint, delta * 0.5)
    })

    return (
        <React.Fragment>
            <color attach="background" args={['tomato']} />

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
                    <Float floatIntensity={2} speed={2} >
                        <Plane
                            rotation={[Math.PI * 0.5, 0, -Math.PI * 0.48]}
                            position={[0, 1, 0]}
                            scale={0.002}
                        />
                    </Float>
                </group>
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
                        opacity={0.1}
                        transparent
                    />
                </mesh>
            </group>

            {/* Initial Clouds */}
            <group rotation={[0, Math.PI * 0.6, 0]} >
                <Cloud02 scale={0.5} position={[6, -4, -6]} rotation={[-Math.PI * 0.25, Math.PI * 0.25, 0]} />
                <Cloud02 scale={1.5} position={[12, -6, -12]} rotation={[Math.PI * 0.75, 0, 0]} />
                <Cloud01 position={[12, -12, -4]} />
                <Cloud01 position={[10, -8, 12]} />
                <Cloud01 position={[4, -4, 12]} rotation={[Math.PI * 0.25, 0, 0]} />
                <Cloud02 scale={0.8} position={[15, 1, 20]} rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]} />
            </group>

        </React.Fragment>
    );
};
