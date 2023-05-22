import React from "react"
import { RigidBody } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"

export const Player = () => {
    const [subscribedKeys, getKeys] = useKeyboardControls()

    const bodyRef = React.useRef()
    const handleJump = () => {
        bodyRef.current.applyImpulse({ x: 0, y: 0.5, z: 0 })
    }
    React.useEffect(() => {
        subscribedKeys(
            (state) => state.jump,
            (value) => {
                value && handleJump()
            }
        )
    }, [])

    useFrame((_state, delta) => {
        const { forward, backward, leftward, rightward } = getKeys()
        const impulse = { x: 0, y: 0, z: 0 }
        const torque = { x: 0, y: 0, z: 0 }
        const impulseStr = 1 * delta
        const torqueStr = 1 * delta

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
                <meshStandardMaterial flatShading color='mediumpurple' />
            </mesh>
        </RigidBody>
    )
}