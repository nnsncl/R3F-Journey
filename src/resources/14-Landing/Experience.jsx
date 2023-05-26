import React from "react";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

import { Float, OrbitControls, Sky } from "@react-three/drei";
import { Plane } from "./Planes";


export const Experience = () => {
    // const {  } = useControls('perfs', { })

    return (
        <React.Fragment>
            <color args={['#EDEDED']} attach='background' />
            {/* <Sky /> */}
            <OrbitControls makeDefault enableZoom={false} enablePan={false} />
            <directionalLight
                position={[-2, 2, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={10}
                shadow-camera-far={10}
                shadow-camera-top={10}
                shadow-camera-right={10}
                shadow-camera-bottom={-10}
                shadow-camera-left={-10}
            />
            <ambientLight intensity={0.5} />

            <Float>
                <Plane position={[0, 0, -2]} scale={0.002} />
            </Float>

        </React.Fragment>
    );
};
