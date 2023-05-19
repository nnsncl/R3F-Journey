import React from "react";
import { Float, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

import { SSR, EffectComposer, Vignette, Glitch, Noise, Bloom, DepthOfField } from "@react-three/postprocessing";
import { GlitchMode, BlendFunction } from "postprocessing";
import { useFrame } from "@react-three/fiber";

export const Experience = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })
    const bloomRef = React.useRef();
    useFrame((_, delta) => {
        bloomRef.current.rotation.y += delta;
        bloomRef.current.rotation.x += delta * (Math.PI * 0.25);
    })
    const SSRProps = useControls('SSR', {
        temporalResolve: true,
        STRETCH_MISSED_RAYS: true,
        USE_MRT: true,
        USE_NORMALMAP: true,
        USE_ROUGHNESSMAP: true,
        ENABLE_JITTERING: true,
        ENABLE_BLUR: true,
        temporalResolveMix: { value: 0.9, min: 0, max: 1 },
        temporalResolveCorrectionMix: { value: 0.25, min: 0, max: 1 },
        maxSamples: { value: 0, min: 0, max: 1 },
        resolutionScale: { value: 1, min: 0, max: 1 },
        blurMix: { value: 0.5, min: 0, max: 1 },
        blurKernelSize: { value: 8, min: 0, max: 8 },
        blurSharpness: { value: 0.5, min: 0, max: 1 },
        rayStep: { value: 0.3, min: 0, max: 1 },
        intensity: { value: 1, min: 0, max: 5 },
        maxRoughness: { value: 0.1, min: 0, max: 1 },
        jitter: { value: 3.85, min: 0, max: 5 },
        jitterSpread: { value: 0.45, min: 0, max: 1 },
        jitterRough: { value: 0.1, min: 0, max: 1 },
        roughnessFadeOut: { value: 1, min: 0, max: 1 },
        rayFadeOut: { value: 0, min: 0, max: 1 },
        MAX_STEPS: { value: 20, min: 0, max: 20 },
        NUM_BINARY_SEARCH_STEPS: { value: 5, min: 0, max: 10 },
        maxDepthDifference: { value: 3, min: 0, max: 10 },
        maxDepth: { value: 1, min: 0, max: 1 },
        thickness: { value: 10, min: 0, max: 10 },
        ior: { value: 1.45, min: 0, max: 2 }
    })
    return (
        <React.Fragment>
            {showPerfs && (<Perf position="bottom-left" visible={showPerfs} />)}
            <color args={['#212121']} attach='background' />
            <EffectComposer multisampling={8} >
                <DepthOfField focusDistance={0.025} focalLength={0.025} bokehScale={6} />
                <SSR {...SSRProps} />
                <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} />
                <Bloom mipmapBlur intensity={2} luminanceThreshold={0} />
                <Vignette offset={0.3} darkness={0.9} blendFunction={BlendFunction.NORMAL} />
            </EffectComposer>

            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <Float speed={10} floatIntensity={10}>
                <mesh position={[0, 1, 0]} scale={1.5} ref={bloomRef}>
                    <icosahedronGeometry />
                    <meshStandardMaterial color={'ivory'} />
                    <meshBasicMaterial color={[5, 2, 1]} toneMapped={false} />
                </mesh>
            </Float>


            <mesh position-y={-2} rotation-x={- Math.PI * 0.5} scale={100}>
                <planeGeometry />
                <meshStandardMaterial color="black" metalness={0} roughness={0} />
            </mesh>

        </React.Fragment>
    );
};
