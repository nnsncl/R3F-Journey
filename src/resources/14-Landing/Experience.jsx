import React from "react";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

import { useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sky } from "@react-three/drei";

import { Plane } from "./Planes";
import { Cloud01, Cloud02 } from "./Clouds";

export const Experience = () => {
    // const {  } = useControls('perfs', { })

    return (
        <React.Fragment>
            <color attach="background" args={['tomato']} />
            {/* <fog attach="fog" color="tomato" near={1} far={30} /> */}
            <OrbitControls makeDefault enableZoom={true} enablePan={false} />
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
                color={'tomato'}
            />
            <ambientLight intensity={0.5} color={'lightblue'} />

            <Float>
                <Plane position={[0, 0, -2]} scale={0.002} />
            </Float>
            <Cloud01 position={[-10, -8, 5]} />
            <Cloud02 position={[-12, -2, -8]} rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]} />
        </React.Fragment>
    );
};
