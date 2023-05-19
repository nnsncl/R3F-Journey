import React from "react";
import {
    Environment,
    Float,
    PresentationControls,
} from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Phone } from "./Phone";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";

export const Experience = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })
    const icosRef = React.useRef()
    useFrame((_, delta) => {
        icosRef.current.rotation.x += (delta * 0.1) * Math.PI
        icosRef.current.rotation.y += (delta * 0.1) * Math.PI

        icosRef.current.children.forEach((child) => {
            child.rotation.x += delta
            child.rotation.y += delta
        })
    })
    return (
        <React.Fragment>
            {showPerfs && <Perf position="bottom-left" visible={showPerfs} />}
            <EffectComposer>
                <Bloom mipmapBlur intensity={1} luminanceThreshold={0.2} />
                <Noise premultiply />
            </EffectComposer>

            <Environment preset="city" resolution={512} />
            <color args={['#0E0E0E']} attach='background' />

            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <group ref={icosRef}>
                <mesh scale={0.09} position={[0.25, 0.25, -1]} >
                    <icosahedronGeometry />
                    <meshStandardMaterial color={[5, 3, 10]} toneMapped={false} />
                </mesh>
                <mesh scale={0.07} position={[0.75, -0.75, -0.5]} >
                    <tetrahedronGeometry />
                    <meshStandardMaterial color={[5, 3, 10]} toneMapped={false} />
                </mesh>
                <mesh scale={0.05} position={[-1, 0, -1.3]} >
                    <octahedronGeometry />
                    <meshStandardMaterial color={[5, 3, 10]} toneMapped={false} />
                </mesh>
            </group>
            <PresentationControls
                global
                config={{ mass: 2, tension: 2000 }}
                snap={{ mass: 4, tension: 2000 }}
                polar={[-0.3, 0.3]}
                azimuth={[-Math.PI / 3, Math.PI / 3]}
            >
                <Float rotationIntensity={0.5}>
                    <Phone position={[-0.1, 0.2, 0]} scale={0.5} />
                </Float>
                <mesh position={[0, -1.5, 0]} rotation={[-0.12, 0, 0]}>
                    <cylinderGeometry />
                    <meshStandardMaterial color={'#0E0E0E'} metalness={1} roughness={0.1} />
                </mesh>
            </PresentationControls>

        </React.Fragment>
    );
};
