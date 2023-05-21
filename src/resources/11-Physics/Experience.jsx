import React from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { OrbitControls, useGLTF } from '@react-three/drei'
import {
    Debug,
    Physics,
    RigidBody,
    BallCollider,
    CuboidCollider,
    CylinderCollider
} from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'

export const Experience = () => {
    const { showPerfs, showDebug } = useControls('Monitoring', {
        showPerfs: false,
        showDebug: true,
    })
    const model = useGLTF('./models/hamburger.glb')

    const [hitSound] = React.useState(new Audio('./sounds/hit.mp3'))
    const impulseRef = React.useRef()
    const carousselRef = React.useRef()


    const createImpulse = () => {
        const mass = impulseRef.current.mass()

        impulseRef.current.applyImpulse({
            x: 0,
            y: mass * Math.PI,
            z: 0,
        })
        impulseRef.current.applyTorqueImpulse({
            x: Math.random() - 0.5,
            y: Math.random() - 0.5,
            z: Math.random() - 0.5
        })
    }
    const collisionEnter = () => {
        // hitSound.currentTime = 0
        // hitSound.volume = Math.random()
        // hitSound.play()
    }

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime()
        const eulerRotation = new THREE.Euler(0, time * 3, 0)
        const quaternionRotation = new THREE.Quaternion()
        const angle = time * 0.5
        const x = Math.cos(angle) * 2
        const z = Math.sin(angle) * 2

        quaternionRotation.setFromEuler(eulerRotation)
        carousselRef.current.setNextKinematicRotation(quaternionRotation)
        carousselRef.current.setNextKinematicTranslation({ x: x, y: -0.8, z: z })
    })

    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}
            <OrbitControls makeDefault />
            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <Physics gravity={[0, -9.08, 0]} >
                {showDebug && <Debug />}

                <RigidBody
                    ref={impulseRef}
                    position={[2, 2, 0]}
                    restitution={0.5}
                    friction={0.7}
                    colliders={false}
                    onCollisionEnter={collisionEnter}
                // onCollisionExit={() => console.log('exit')}
                // onSleep={() => console.log('sleeping')}
                // onWake={() => console.log('awake')}
                >
                    <CuboidCollider args={[0.5, 0.5, 0.5]} mass={1} />
                    <mesh castShadow onClick={createImpulse} >
                        <boxGeometry />
                        <meshStandardMaterial color='tomato' />
                    </mesh>
                </RigidBody>

                <RigidBody
                    colliders='ball'
                    gravityScale={1}
                >
                    <mesh castShadow position={[-2, 2, 0]} scale={0.5}>
                        <sphereGeometry />
                        <meshStandardMaterial color="yellowgreen" />
                    </mesh>
                </RigidBody>

                <RigidBody
                    ref={carousselRef}
                    type='kinematicPosition'
                    friction={0}
                    position={[0, -0.8, 0]}
                >
                    <mesh castShadow scale={[0.4, 0.4, 3]} >
                        <boxGeometry />
                        <meshStandardMaterial color='mediumpurple' />
                    </mesh>
                </RigidBody>

                <RigidBody position={[0, 4, 0]}  >
                    {/* <CylinderCollider args={[0.5, 1.25]} /> */}
                    <primitive object={model.scene} scale={0.25} />
                </RigidBody>

                <RigidBody
                    type='fixed'
                    friction={0.7}
                >
                    <mesh receiveShadow position-y={- 1.25}>
                        <boxGeometry args={[10, 0.5, 10]} />
                        <meshStandardMaterial color="ivory" />
                    </mesh>
                </RigidBody>

                {/* <RigidBody colliders='ball' >
                    <mesh castShadow position={[- 2, 2, 0]}>
                        <sphereGeometry />
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                </RigidBody> */}
                {/* <RigidBody colliders={false} position={[0, 1, 0]} rotation-x={Math.PI * 0.4}>
                    <CuboidCollider args={[1.5, 1.5, 0.5]} />
                    <CuboidCollider
                        args={[0.25, 1, 0.25]}
                        position={[0, 0, 1]}
                        rotation={[-Math.PI * 0.3, 0, 0]}
                    />
                    <BallCollider args={[1.5]} />
                    <mesh castShadow >
                        <torusGeometry args={[1, 0.5, 16, 32]} />
                        <meshStandardMaterial color='tomato' />
                    </mesh>
                </RigidBody> */}

                {/* <RigidBody>
                    <mesh castShadow position={[2, 2, 0]} >
                        <boxGeometry args={[1, 3, 1]} />
                        <meshStandardMaterial color="tomato" />
                    </mesh>
                    <mesh castShadow position={[2, 2, 3]} >
                        <boxGeometry args={[1, 1, 3]} />
                        <meshStandardMaterial color="tomato" />
                    </mesh>
                </RigidBody> */}
            </Physics>
        </React.Fragment>
    )
}
useGLTF.preload('./models/hamburger.glb')