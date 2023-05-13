import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useGLTF, Clone, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Hamburger } from "./Hamburger";


const MeshLoader = (props) => {
    return (
        <mesh {...props} >
            <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
            <meshBasicMaterial wireframe color='red' />
        </mesh>
    )
}

export const Experience = () => {
    const { showPerfs } = useControls('perfs', { showPerfs: false })

    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}

            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <React.Suspense fallback={<MeshLoader position-y={0.5} scale={[2, 3, 2]} />} >
                <Hamburger scale={0.3} />
            </React.Suspense>

            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>
        </React.Fragment>
    );
};
