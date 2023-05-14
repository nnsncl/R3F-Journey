import React from "react";
import { Text3D, Center, OrbitControls, useMatcapTexture, Clone } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { MeshMatcapMaterial } from "three";

export const Experience = () => {
    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
    const { showPerfs } = useControls('perfs', { showPerfs: false })

    const [torusGeometry, setTorusGeometry] = React.useState()
    const [material, setMaterial] = React.useState()


    return (
        <React.Fragment>
            {showPerfs && <Perf position="bottom-left" visible={showPerfs} />}
            <OrbitControls makeDefault />

            <torusGeometry ref={setTorusGeometry} position={[]} />
            <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture} />

            <Center>
                <Text3D
                    size={0.75}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled={true}
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                    material={matcapTexture}
                    font='./fonts/helvetiker_regular.typeface.json' >
                    r3f
                </Text3D>
            </Center>

            {[...Array(100)].map((_torus, key) => (
                <mesh
                    key={key}
                    geometry={torusGeometry}
                    material={material}
                    position={[
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10,
                    ]}
                    scale={0.2 + Math.random() * 0.2}
                    rotation={[
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                        0,
                    ]}
                />
            ))}


        </React.Fragment>
    );
};
