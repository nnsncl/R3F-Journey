import React from "react";
import * as THREE from 'three'

import { useFrame } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";

import { Plane } from "./Planes";
import { Clouds } from "./constants/Clouds";
import { Cloud01, Cloud02 } from "./Clouds";
import { Background } from "./Background";
import { Content } from "./constants/Content";
import { TextSection } from "./TextSection";

import { fadeOnBeforeCompile } from "./utils/fadeMaterialShader";
import { gsap } from "gsap";
import useLanding from "./stores/useLanding";
import { Trails } from "./Trails";


const LINE_POINTS_AMOUNT = 1000
const CURVE_DISTANCE = 250
const CURVE_AHEAD_CAMERA = 0.008
const CURVE_AHEAD_PLANE = 0.02
const PLANE_MAX_ANGLE = 42
const FRICTION_DISTANCE = 42

export const Experience = () => {
    const scroll = useScroll()

    const plane = React.useRef()
    const planeTl = React.useRef()
    const planeOutTl = React.useRef()
    const cameraGroup = React.useRef()
    const cameraRail = React.useRef()
    const lastScroll = React.useRef(0)

    const play = useLanding((state) => state.play)
    const end = useLanding((state) => state.end)
    const updateStatus = useLanding((state) => state.updateStatus)

    const curvePoints = React.useMemo(() => [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -CURVE_DISTANCE),
        new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
        new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
        new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
    ], [])

    const curve = React.useMemo(() => {
        return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5)
    }, [])

    const shape = React.useMemo(() => {
        const memoized = new THREE.Shape()
        memoized.moveTo(0, -0.01)
        memoized.lineTo(0, 0.1)

        return memoized
    }, [curve])

    const textSections = React.useMemo(() => Content(curvePoints), [])
    const clouds = React.useMemo(() => Clouds(curvePoints), [])

    useFrame((_, delta) => {
        // Hide scroll indications on scroll
        if (lastScroll.current <= 0 && scroll.offset > 0) {
            updateStatus('hasScrolled')
        }

        // Clear if the scene is ended
        if (end) return

        const scrollOffset = Math.max(0, scroll.offset)

        // Text Sections, Friction near sections
        let friction = 1
        let resetCamRail = true
        textSections.forEach((textSection) => {
            const distance = textSection.position.distanceTo(
                cameraGroup.current.position
            )

            if (distance < FRICTION_DISTANCE) {
                friction = Math.max(distance / FRICTION_DISTANCE, 0.1)

                const targetCameraRailPosition = new THREE.Vector3(
                    (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist, 0, 0
                )  // calc sliding factor

                cameraRail.current.position.lerp(targetCameraRailPosition, delta)
                resetCamRail = false
            }
        })
        if (resetCamRail) {
            const targetCameraRailPosition = new THREE.Vector3(0, 0, 0)
            cameraRail.current.position.lerp(targetCameraRailPosition, delta)
        }

        // Calc Lerped scroll offset
        let lerpedScrollOffset = THREE.MathUtils.lerp(lastScroll.current, scrollOffset, delta * friction)

        // Preserve bellow 0, above 1
        lerpedScrollOffset = Math.min(lerpedScrollOffset, 1)
        lerpedScrollOffset = Math.max(lerpedScrollOffset, 0)
        lastScroll.current = lerpedScrollOffset

        // Curved Camera Path
        const currentPoint = curve.getPoint(lerpedScrollOffset)
        cameraGroup.current.position.lerp(currentPoint, delta * 24) // Follow the curve points

        const lookAtPoint = curve.getPoint(Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1))
        const currentLookAt = cameraGroup.current
            .getWorldDirection(new THREE.Vector3())

        const targetLookAt = new THREE.Vector3()
            .subVectors(currentPoint, lookAtPoint)
            .normalize()

        const lookAt = currentLookAt.lerp(targetLookAt, delta * 24)
        cameraGroup.current.lookAt(cameraGroup.current.position.clone().add(lookAt))

        const tangent = curve.getTangent(lerpedScrollOffset + CURVE_AHEAD_PLANE)
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

        // End scene animation when the plane reach the last point
        if (cameraGroup.current.position.z < curvePoints[curvePoints.length - 1].z + 42) {
            updateStatus('end')
            planeOutTl.current.play()
        }
    })

    React.useLayoutEffect(() => {
        planeTl.current = gsap.timeline()
        planeTl.current.pause()
        planeTl.current.from(plane.current.position, {
            duration: 3,
            ease: "power4",
            z: 20,
            y: -10
        })

        planeOutTl.current = gsap.timeline();
        planeOutTl.current.pause();
        planeOutTl.current.to(plane.current.position, {
            duration: 6,
            ease: "power4",
            z: -10,
        })
    }, [])

    React.useEffect(() => {
        if (play) planeTl.current.play()
    }, [play])

    // Memo revents animations jump on first load
    return React.useMemo(() => (
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
            <ambientLight intensity={0.5} color={'tomato'} />

            {/* <OrbitControls /> */}

            {/* Camera Group / Plane */}
            <group ref={cameraGroup} >
                <Trails />
                <Background />
                <group ref={cameraRail} >
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 1, 12]}
                        fov={45}
                        near={0.1}
                        far={200}
                    />
                </group>

                <group ref={plane}>
                    <Float
                        floatIntensity={0.5}
                        rotationIntensity={0.2}
                        speed={2}
                    >
                        <Plane
                            rotation={[Math.PI * 0.55, 0, -Math.PI * 0.5]}
                            position={[0, 1, 0]}
                            scale={0.002}
                        />
                    </Float>
                </group>
            </group>

            {/* Curved Path */}
            <group position={[0, -2, 6]} >
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
                        color='white'
                        opacity={0.1}
                        transparent
                        envMapIntensity={2}
                        onBeforeCompile={fadeOnBeforeCompile}
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
            {clouds.map((cloud, key) => (<Cloud01 key={key} {...cloud} />))}

            {/* Text */}
            {textSections.map((textSection, key) => <TextSection key={key} {...textSection} />)}

        </React.Fragment>
    ), []);
};
