import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

import { EffectComposer, Vignette, Glitch, Noise, Bloom } from "@react-three/postprocessing";
import { GlitchMode, BlendFunction } from "postprocessing";

export const Experience = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })

    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}
            <color args={['#212121']} attach='background' />
            <EffectComposer multisampling={8}>
                <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} />
                <Bloom mipmapBlur intensity={2} luminanceThreshold={0} />
                {/* <Glitch delay={[0.5, 1]} duration={[0.1, 0.3]} strength={[0.1, 0.2]} mode={GlitchMode.CONSTANT_WILD} /> */}
                {/* <Vignette offset={0.3} darkness={0.9} blendFunction={BlendFunction.NORMAL} /> */}
            </EffectComposer>

            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <mesh position={[2, 1, 0]} >
                <sphereGeometry />
                <meshStandardMaterial color={'tomato'} />
            </mesh>

            <mesh position={[-2, 1, 0]} scale={1.5} >
                <tetrahedronGeometry />
                <meshBasicMaterial color={[10, 4, 2]} toneMapped={false} />
            </mesh>

            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={100}>
                <planeGeometry />
                <meshStandardMaterial color="#212121" />
            </mesh>

        </React.Fragment>
    );
};
