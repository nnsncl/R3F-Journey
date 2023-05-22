import React from "react"
import * as THREE from 'three'
import { RigidBody } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"

THREE.ColorManagement.legacyMode = false
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const materials = {
    floor01: new THREE.MeshStandardMaterial({ color: 'limegreen' }),
    floor02: new THREE.MeshStandardMaterial({ color: 'greenyellow' }),
    obstacle: new THREE.MeshStandardMaterial({ color: 'orangered' }),
    wall: new THREE.MeshStandardMaterial({ color: 'slategrey' }),
}

const BlockSpinner = ({ position = [0, 0, 0] }) => {
    const spinnerRef = React.useRef()
    const [speed] = React.useState(() => (Math.random() + 0.2) * Math.random() < 0.5 ? -1 : 1)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const eulerRotation = new THREE.Euler(0, time * speed, 0)
        const quaternionRotation = new THREE.Quaternion()

        quaternionRotation.setFromEuler(eulerRotation)
        spinnerRef.current.setNextKinematicRotation(quaternionRotation)
    })

    return (
        <group position={position} >
            <RigidBody
                ref={spinnerRef}
                type='kinematicPosition'
                friction={0}
                restitution={0.2}
                position={[0, 0.3, 0]}
            >
                <mesh
                    castShadow
                    scale={[3.5, 0.3, 0.3]}
                    geometry={boxGeometry}
                    material={materials.obstacle}
                />
            </RigidBody>
            <mesh
                receiveShadow
                geometry={boxGeometry}
                material={materials.floor02}
                position={[0, -0.1, 0]}
                scale={[4, 0.2, 4]}
            />
        </group>
    )
}
const BlockLimbo = ({ position = [0, 0, 0] }) => {
    const limboRef = React.useRef()
    const [timeOffset] = React.useState(() => (Math.random() * Math.PI))

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const floorLevel = 1.15
        const kinematicMatrix = {
            x: position[0],
            y: position[1] + Math.sin(time * timeOffset) + floorLevel,
            z: position[2]
        }

        limboRef.current.setNextKinematicTranslation(kinematicMatrix)
    })

    return (
        <group position={position} >
            <RigidBody
                ref={limboRef}
                type='kinematicPosition'
                friction={0}
                restitution={0.2}
                position={[0, 0.3, 0]}
            >
                <mesh
                    castShadow
                    scale={[3.5, 0.3, 0.3]}
                    geometry={boxGeometry}
                    material={materials.obstacle}
                />
            </RigidBody>
            <mesh
                receiveShadow
                geometry={boxGeometry}
                material={materials.floor02}
                position={[0, -0.1, 0]}
                scale={[4, 0.2, 4]}
            />
        </group>
    )
}

const BlockStart = ({ position = [0, 0, 0] }) => {
    return (
        <RigidBody type='fixed' >
            <group position={position} >
                {/* Floor */}
                <mesh
                    receiveShadow
                    geometry={boxGeometry}
                    material={materials.floor01}
                    position={[0, -0.1, 0]}
                    scale={[4, 0.2, 4]}
                />
            </group>
        </RigidBody>
    )
}
export const Level = () => {
    return (
        <React.Fragment>
            <BlockStart position={[0, 0, 8]} />
            <BlockSpinner position={[0, 0, 4]} />
            <BlockLimbo position={[0, 0, 0]} />
        </React.Fragment>
    );
};
