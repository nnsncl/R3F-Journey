import React from "react";
import { Text3D, Center, OrbitControls, useMatcapTexture } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export const Experience = () => {
    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
    const { showPerfs } = useControls('perfs', { showPerfs: false })

    return (
        <React.Fragment>
            {showPerfs && <Perf position="bottom-left" visible={showPerfs} />}
            <OrbitControls makeDefault />

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
                    font='./fonts/helvetiker_regular.typeface.json' >
                    r3f
                    <meshMatcapMaterial matcap={matcapTexture} />
                </Text3D>
            </Center>

        </React.Fragment>
    );
};
