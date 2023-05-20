import React from 'react'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { OrbitControls } from '@react-three/drei'
import { Debug, Physics, RigidBody, BallCollider, CuboidCollider } from '@react-three/rapier'

export const Experience = () => {
    const { showPerfs, showDebug } = useControls('Monitoring', {
        showPerfs: false,
        showDebug: true,
    })

    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}
            <OrbitControls makeDefault />
            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <Physics>
                {showDebug && <Debug />}
                {/* <RigidBody colliders='ball' >
                    <mesh castShadow position={[- 2, 2, 0]}>
                        <sphereGeometry />
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                </RigidBody> */}


                <RigidBody colliders='ball' >
                    <mesh castShadow position={[0, 5, 0]} scale={0.5}>
                        <sphereGeometry />
                        <meshStandardMaterial color="yellowgreen" />
                    </mesh>
                </RigidBody>
                <RigidBody colliders={false} position={[0, 1, 0]} rotation-x={Math.PI * 0.4}>
                    {/* <CuboidCollider args={[1.5, 1.5, 0.5]} />
                    <CuboidCollider
                        args={[0.25, 1, 0.25]}
                        position={[0, 0, 1]}
                        rotation={[-Math.PI * 0.3, 0, 0]}
                    /> */}
                    <BallCollider args={[1.5]} />
                    <mesh castShadow >
                        <torusGeometry args={[1, 0.5, 16, 32]} />
                        <meshStandardMaterial color='tomato' />
                    </mesh>
                </RigidBody>


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

                <RigidBody type='fixed'>
                    <mesh receiveShadow position-y={- 1.25}>
                        <boxGeometry args={[10, 0.5, 10]} />
                        <meshStandardMaterial color="ivory" />
                    </mesh>
                </RigidBody>

            </Physics>


        </React.Fragment>
    )
}