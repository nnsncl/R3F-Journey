import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export const Experience = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })

    return (
        <React.Fragment>
            {showPerfs && <Perf position="bottom-left" visible={showPerfs} />}
            <OrbitControls makeDefault />

            <mesh scale={1.5}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </React.Fragment>
    );
};
