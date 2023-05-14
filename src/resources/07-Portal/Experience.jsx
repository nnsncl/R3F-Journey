import React from "react";
import { useGLTF, useTexture, OrbitControls, Center } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

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

export const Experience = () => {
    const { nodes } = useGLTF('./models/portal/portal.glb')
    const bakedTexture = useTexture('./models/portal/baked.jpg')

    console.log(nodes)
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
                    <meshBasicMaterial color='red' />
                </mesh>
            </Center>
        </React.Fragment>
    );
};
