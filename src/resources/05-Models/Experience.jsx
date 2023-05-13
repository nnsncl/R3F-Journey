import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

const Model = () => {
    const model = useLoader(GLTFLoader, './models/FlightHelmet/glTF/FlightHelmet.gltf', (loader) => {
        const draco = new DRACOLoader();
        draco.setDecoderPath('./models/draco/');
        loader.setDRACOLoader(draco);
    })

    return <primitive object={model.scene} scale={3} position-y={-1} />
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

            <React.Suspense>
                <Model />
            </React.Suspense>

            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>
        </React.Fragment>
    );
};
