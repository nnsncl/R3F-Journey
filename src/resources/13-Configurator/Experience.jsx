import React from "react";
import { Float, Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Physics, RigidBody, InstancedRigidBodies } from "@react-three/rapier";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { Birb } from "./Birb";
import { Rock } from "./Rock";
import { Cumulus } from "./Cumulus";
import { Crown } from "./Crown";

export const Experience = () => {
    const [colliderEnabled, enableCollider] = React.useState(false)


    const collidersAmount = 10
    const collidersRef = React.useRef()
    const collidersTransforms = React.useMemo(() => {
        const positions = []
        const rotations = []
        const scales = []

        for (let i = 0; i < collidersAmount; i++) {
            positions.push([
                Math.random() - 0.5 * (Math.PI * 1.1),
                6 + i + 0.75,
                Math.random() - 0.5 + 1.8
            ])
            rotations.push([
                Math.random(),
                Math.random(),
                Math.random()
            ])

            const scale = Math.random() * 0.5
            scales.push([scale, scale, scale])
        }

        return { positions, rotations, scales }
    }, [])

    useFrame((state) => {
        state.camera.position.lerp({
            x: -10 + state.pointer.x * 0.05,
            y: state.pointer.y * 0.05,
            z: -(state.pointer.x * 0.05)
        }, 1)
    })

    return (
        <React.Fragment>
            <EffectComposer>
                <Bloom mipmapBlur intensity={2} luminanceThreshold={1} />
            </EffectComposer>

            <Sky sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
            <directionalLight position={[-1, 2, -3]} intensity={1} />
            <ambientLight intensity={0.5} />
            <hemisphereLight intensity={0.5} color="#FAFAFA" position={[0, 1, 0]} />

            <Physics>
                {colliderEnabled && (
                    <InstancedRigidBodies
                        positions={collidersTransforms.positions}
                        rotations={collidersTransforms.rotations}
                        scales={collidersTransforms.scales}
                    >
                        <instancedMesh
                            ref={collidersRef}
                            args={[null, null, collidersAmount]}
                        >
                            <sphereGeometry />
                            <meshStandardMaterial />
                        </instancedMesh>
                    </InstancedRigidBodies>
                )}

                <Float floatIntensity={0.5} rotationIntensity={0.1} speed={2}>
                    <Crown position={[-2, 2.2, 2.5]} scale={0.4} />
                </Float>
                <RigidBody
                    colliders='hull'
                    position={[-1.35, 0.75, 2.1]}
                    friction={1}
                    restitution={0.5}
                    onDoubleClick={() =>
                        enableCollider(!colliderEnabled)
                    }
                >
                    <Birb scale={0.5} rotation={[0, Math.PI * 0.25, 0]} />
                </RigidBody>

                <Float floatIntensity={0.5} speed={0.5}>
                    <Cumulus
                        scale={3}
                        position={[0, -0.5, 1.5]}
                        rotation={[0, -Math.PI * 0.5, 0]}
                    />
                </Float>
                <RigidBody type="fixed" colliders='hull'>
                    <Rock scale={5} position={[2, -6, 0]} />
                </RigidBody>
            </Physics>
        </React.Fragment>
    );
};