import React from "react";
import * as THREE from "three"
import { extend, useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, OrbitControls, Center, Sparkles, shaderMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import portalVertexShader from './shaders/vertex.glsl';
import portalFragmentShader from './shaders/fragment.glsl';

const Commons = () => {
    const { showPerfs } = useControls('perfs', { showPerfs: false })

    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}

            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
        </React.Fragment>
    )
}

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uInnerColor: new THREE.Color('#FAFAFA'),
        uOuterColor: new THREE.Color('#212121'),
    },
    portalVertexShader,
    portalFragmentShader
)
extend({ PortalMaterial })

export const Experience = () => {
    const { nodes } = useGLTF('./models/portal/portal.glb')
    const bakedTexture = useTexture('./models/portal/baked.jpg')

    const portalRef = React.useRef()
    useFrame((_, delta) => {
        portalRef.current.uTime += delta
    })

    return (
        <React.Fragment>
            <color args={['#212121']} attach='background' />
            <Commons />
            <OrbitControls makeDefault />

            <Center>
                <mesh geometry={nodes.baked.geometry} >
                    <meshBasicMaterial
                        map={bakedTexture}
                        map-flipY={false}
                    />
                </mesh>

                <mesh
                    geometry={nodes.poleLightA.geometry}
                    position={nodes.poleLightA.position}
                >
                    <meshBasicMaterial color='ivory' />
                </mesh>
                <mesh
                    geometry={nodes.poleLightB.geometry}
                    position={nodes.poleLightB.position}
                >
                    <meshBasicMaterial color='ivory' />
                </mesh>
                <mesh
                    geometry={nodes.portalLight.geometry}
                    position={nodes.portalLight.position}
                    rotation={nodes.portalLight.rotation}
                >
                    <portalMaterial ref={portalRef} />
                </mesh>

                <Sparkles
                    count={100}
                    size={2}
                    scale={[4, 2, 4]}
                    position-y={1}
                    speed={0.2}
                />
            </Center>
        </React.Fragment>
    );
};
