import React from 'react'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { OrbitControls } from '@react-three/drei'


export const Experience = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })

    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}
            <OrbitControls makeDefault />
            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <mesh castShadow position={[- 2, 2, 0]}>
                <sphereGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
            <mesh castShadow position={[2, 2, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="tomato" />
            </mesh>
            <mesh receiveShadow position-y={- 1.25}>
                <boxGeometry args={[10, 0.5, 10]} />
                <meshStandardMaterial color="ivory" />
            </mesh>
        </React.Fragment>
    )
}