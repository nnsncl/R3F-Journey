import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useGLTF, Clone, OrbitControls, Float, Sky, MeshReflectorMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Hamburger } from "./Hamburger";
import { Fox } from './Fox';


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
    const dodecaRef = React.useRef()

    // useFrame((state, delta) => {
    //     dodecaRef.current.rotation.x -= delta * (Math.PI * 0.1)
    // });

    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}

            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={2} shadow-normalBiais={0.04} />
            <ambientLight intensity={0.5} />
            <Sky />

            <React.Suspense fallback={<MeshLoader position-y={0.5} scale={[2, 3, 2]} />} >
                <Fox
                    scale={0.01}
                    position={[0, 0, 0]}
                    rotation-y={0.3}
                />
            </React.Suspense>

            <React.Suspense fallback={<MeshLoader position-y={0.5} scale={[2, 3, 2]} />} >
                <Float
                    speed={10}
                    intensity={3}
                    rotationIntensity={1}
                    floatIntensity={2}
                >
                    <Hamburger scale={0.03} position={[0.3, 0.8, 1.2]} />
                </Float>
            </React.Suspense>
            <mesh scale={3} position-y={-3} ref={dodecaRef}>
                <sphereGeometry />
                <meshStandardMaterial color="lightgreen" />
            </mesh>

            {/* <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh> */}
        </React.Fragment>
    );
};
