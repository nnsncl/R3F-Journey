import React from "react"
import * as THREE from 'three'
import { RigidBody, useRapier } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import useGame from "./stores/useGame"


export const Player = () => {
    const bodyRef = React.useRef()
    const [subscribedKeys, getKeys] = useKeyboardControls()

    const { rapier, world } = useRapier()
    const rapierWorld = world.raw()

    const [smoothCameraPosition] = React.useState(() => new THREE.Vector3(10, 10, 10))
    const [smoothCameraTarget] = React.useState(() => new THREE.Vector3())

    const start = useGame((state) => state.start)
    const end = useGame((state) => state.end)
    const restart = useGame((state) => state.restart)
    const blocksCount = useGame((state) => state.blocksCount)


    const handleJump = () => {
        const origin = bodyRef.current.translation()
        const direction = { x: 0, y: -1, z: 0 }
        origin.y -= 0.31

        const ray = new rapier.Ray(origin, direction)
        const hit = rapierWorld.castRay(ray, 10, true)

        if (hit.toi < 0.15)
            bodyRef.current.applyImpulse({ x: 0, y: 0.5, z: 0 })

    }
    const reset = () => {
        bodyRef.current.setTranslation({ x: 0, y: 1, z: 0 })
        bodyRef.current.setLinvel({ x: 0, y: 0, z: 0 })
        bodyRef.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    React.useEffect(() => {
        const unsubscribeReset = useGame.subscribe(
            (state) => state.phase,
            (value) => {
                if (value === 'ready') reset()
            }
        )
        const unsubsribeAnyKey = subscribedKeys(() => start())
        const unsubsribeJump = subscribedKeys(
            (state) => state.jump,
            (value) => {
                value && handleJump()
            }
        )

        return () => {
            unsubsribeJump()
            unsubsribeAnyKey()
            unsubscribeReset()
        }
    }, [])

    useFrame((state, delta) => {
        /**
         * Controls
         */
        const { forward, backward, leftward, rightward } = getKeys()
        const impulse = { x: 0, y: 0, z: 0 }
        const torque = { x: 0, y: 0, z: 0 }
        const impulseStr = 1 * delta
        const torqueStr = 1 * delta * 0.25

        if (forward) {
            impulse.z -= impulseStr
            torque.x -= torqueStr
        }
        if (rightward) {
            impulse.x += impulseStr
            torque.z -= torqueStr
        }
        if (backward) {
            impulse.z += impulseStr
            torque.x += torqueStr
        }
        if (leftward) {
            impulse.x -= impulseStr
            torque.z += torqueStr
        }

        bodyRef.current.applyImpulse(impulse)
        bodyRef.current.applyTorqueImpulse(torque)

        /**
         * Camera
         */
        const bodyPosition = bodyRef.current.translation()
        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(bodyPosition)
        cameraPosition.z += 2.25
        cameraPosition.y += 0.65

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(bodyPosition)
        cameraTarget.y += 0.25

        smoothCameraPosition.lerp(cameraPosition, 5 * delta)
        smoothCameraTarget.lerp(cameraTarget, 5 * delta)

        state.camera.position.copy(smoothCameraPosition)
        state.camera.lookAt(smoothCameraTarget)

        /**
         * Phases
         */
        const levelSurfaceLength = 4
        const defaultBlocksAmount = 2

        const hasReachedFinalBlock = bodyPosition.z < - (blocksCount * levelSurfaceLength + defaultBlocksAmount)
        const hasFell = bodyPosition.y < -4

        if (hasReachedFinalBlock) end()
        if (hasFell) restart()

    })

    return (
        <RigidBody
            ref={bodyRef}
            colliders='ball'
            position={[0, 1, 0]}
            restitution={0.2}
            friction={1}
            linearDamping={0.5}
            angularDamping={0.5}
        >
            <mesh castShadow receiveShadow >
                <icosahedronGeometry args={[0.3, 1]} />
                <meshStandardMaterial
                    flatShading
                    color='#0E0E0E'
                    toneMapped={false}
                    metalness={0.3}
                    roughness={1}
                />
            </mesh>
        </RigidBody>
    )
}