import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useGLTF, Clone, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { MeshStandardMaterial } from "three";

const MODEL_PATH = './models/hamburger.glb'
useGLTF.preload(MODEL_PATH)
const Model = () => {
    const model = useGLTF(MODEL_PATH)
    // const model = useLoader(GLTFLoader, './models/hamburger.glb', (loader) => {
    //     const draco = new DRACOLoader();
    //     draco.setDecoderPath('./models/draco/');
    //     loader.setDRACOLoader(draco);
    // })

    return (
        <React.Fragment>
            <Clone object={model.scene} scale={0.1} />
            <Clone object={model.scene} position-x={-2} scale={0.1} />
            <Clone object={model.scene} position-x={2} scale={0.1} />
        </React.Fragment>
    )
}
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
                <Model />
            </React.Suspense>

            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>
        </React.Fragment>
    );
};
