import React from "react";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

import { Float, OrbitControls, Sky } from "@react-three/drei";
import { Plane } from "./Planes";


export const Experience = () => {
    // const {  } = useControls('perfs', { })

    return (
        <React.Fragment>
            <OrbitControls makeDefault />
            <directionalLight
                position={[5, 5, -1]}
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
            <Sky />

            <Float>
                <Plane position={[0, 0, 0]} />
            </Float>

            {/* <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]} scale={10} >
                <planeGeometry args={[2, 2, 2, 32]} />
                <meshStandardMaterial color={'white'} />
            </mesh> */}
        </React.Fragment>
    );
};
