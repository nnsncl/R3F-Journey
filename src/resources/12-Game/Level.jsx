import React from "react"
import * as THREE from 'three'
import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { Float, Sparkles, useGLTF } from "@react-three/drei"

THREE.ColorManagement.legacyMode = false
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const materials = {
    floor01: new THREE.MeshStandardMaterial({ color: '#0E0E0E' }),
    floor02: new THREE.MeshStandardMaterial({ color: '#0E0E0E' }),
    obstacle: new THREE.MeshStandardMaterial({ color: '#0E0E0E' }),
    wall: new THREE.MeshStandardMaterial({ color: '#0E0E0E' }),
}

export const Trophy = (props) => {
    // const model = useGLTF('./models/hamburger.glb')
    // model.scene.children.forEach((mesh) =>
    //     mesh.castShadow = true
    // )

    return (

        <group>
            <Float>
                <RigidBody
                    type='fixed'
                    colliders='hull'
                    position={[0, 1.5, 0]}
                    rotation={[0, 0.25, 0]}
                    restitution={0.2}
                    friction={0}
                >
                    <mesh scale={0.5} >
                        <octahedronGeometry />
                        <meshStandardMaterial
                            color={[3, 1, 1]}
                            toneMapped={false}
                            metalness={0}
                            roughness={0}
                        />
                    </mesh>
                </RigidBody>
            </Float >
            {/* <Sparkles
                count={200}
                size={1}
                scale={[4, 4, 4]}
                position-y={2}
                speed={0.2}
            /> */}
        </group >


    )
}
useGLTF.preload('./models/hamburger.glb')

export const BlockSpinner = ({ position = [0, 0, 0] }) => {
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
export const BlockLimbo = ({ position = [0, 0, 0] }) => {
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
export const BlockAxe = ({ position = [0, 0, 0] }) => {
    const limboRef = React.useRef()
    const [timeOffset] = React.useState(() => (Math.random() * Math.PI))

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const kinematicMatrix = {
            x: position[0] + Math.sin(time * timeOffset) * 1.25,
            y: position[1] + 0.75,
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
                    scale={[1.5, 1.5, 0.3]}
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
export const BlockStart = ({ position = [0, 0, 0] }) => {
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
export const BlockEnd = ({ position = [0, 0, 0] }) => {
    return (
        <group position={position} >
            <Trophy />
            <RigidBody type='fixed' >
                <mesh
                    receiveShadow
                    geometry={boxGeometry}
                    material={materials.floor01}
                    position={[0, 0.3, 0]}
                    scale={[4, 0.8, 4]}
                />
            </RigidBody>
        </group>
    )
}
const Boundaries = ({ length = 1 }) => {
    return (
        <RigidBody type="fixed" restitution={0.2} friction={0}>
            <mesh
                castShadow
                geometry={boxGeometry}
                material={materials.wall}
                scale={[0.3, 1.5, length * 4]}
                position={[2.15, 0.7, -(length * 2) + 2]}
            />
            <mesh
                receiveShadow
                geometry={boxGeometry}
                material={materials.wall}
                scale={[0.3, 1.5, length * 4]}
                position={[-2.15, 0.7, -(length * 2) + 2]}
            />
            <mesh
                castShadow
                geometry={boxGeometry}
                material={materials.wall}
                scale={[4.6, 1.4, 0.3]}
                position={[0, 0.75, -(length * 4) + 2]}
            />

            <CuboidCollider
                args={[2, 0.1, length * 2]}
                position={[0, -0.1, -(length * 2) + 2]}
                restitution={0.2}
                friction={1}
            />
        </RigidBody>
    )
}
export const Level = ({
    count = 5,
    types = [BlockSpinner, BlockLimbo, BlockAxe]
}) => {
    const blocks = React.useMemo(() => {
        const memoizedBlocks = []

        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)]
            memoizedBlocks.push(type)
        }

        return memoizedBlocks
    }, [count, types])

    return (
        <React.Fragment>
            <BlockStart position={[0, 0, 0]} />
            {blocks.map((Block, key) =>
                <Block
                    key={key}
                    position={[0, 0, -(key + 1) * 4]}
                />
            )}
            <BlockEnd position={[0, 0, -(count + 1) * 4]} />
            <Boundaries length={count + 2} />
        </React.Fragment>
    );
};