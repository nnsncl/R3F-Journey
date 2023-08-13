import React from "react";
import { useFrame } from "@react-three/fiber";
import {
    ContactShadows,
    Environment,
    Float,
    PresentationControls,
} from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Phone } from "./Phone";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";

export const Experience = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })
    return (
        <React.Fragment>
            {showPerfs && <Perf position="bottom-left" visible={showPerfs} />}

            <EffectComposer>
                <Bloom mipmapBlur intensity={0.1} luminanceThreshold={0.2} />
                <Noise premultiply />
            </EffectComposer>

            <color args={['#0E0E0E']} attach='background' />
            {/* <Environment /> */}

            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <PresentationControls
                global
                config={{ mass: 2, tension: 2000 }}
                snap={{ mass: 4, tension: 2000 }}
                polar={[-0.2, 0.2]}
                azimuth={[-Math.PI / 3, Math.PI / 3]}
            >

                <Float rotationIntensity={0.5}>
                    <Phone position={[-0.1, 0.2, 0]} scale={0.5} />
                </Float>
                <mesh position={[0, -1.5, 0]} rotation={[-0.12, 0, 0]} >
                    <cylinderGeometry />
                    <meshStandardMaterial color={'#0E0E0E'} metalness={0.9} roughness={0.1} />
                </mesh>
            </PresentationControls>

            <ContactShadows
                position-y={-0.9}
                intensity={0.6}
                blur={6}
                scale={3}
            />
        </React.Fragment>
    );
};
