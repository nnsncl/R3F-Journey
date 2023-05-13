import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";

export const Experience = () => {
    const model = useLoader(GLTFLoader, './models/hamburger.glb')
    const { showPerfs } = useControls('perfs', { showPerfs: false })

    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}

            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />


            <primitive object={model.scene} scale={0.1} />


            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="#FFFFFF" />
            </mesh>
        </React.Fragment>
    );
};
