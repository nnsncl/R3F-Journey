import React, { useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CustomGeometry } from "./Custom";

extend({ OrbitControls });

export const Experience = () => {
    const cubeRef = useRef();
    const groupRef = useRef();
    const { camera, gl } = useThree(); // Called a single time on scene load

    // Called on each frame before rendering the scene
    useFrame((state, delta) => {
        const angle = state.clock.elapsedTime;
        const arbitraryValue = (Math.PI * 3);

        // groupRef.current.rotation.y += delta;
        cubeRef.current.rotation.y += delta;
        state.camera.position.x = Math.sin(angle) * arbitraryValue;
        state.camera.position.z = Math.cos(angle) * arbitraryValue;
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <React.Fragment>
            {/* <orbitControls args={[camera, gl.domElement]} /> */}
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <group ref={groupRef}>
                <mesh position-x={-2}>
                    <sphereGeometry />
                    <meshStandardMaterial color='orange' />
                </mesh>
                <mesh ref={cubeRef} scale={1.5} position-x={2} rotation-y={Math.PI * 0.25} >
                    <boxGeometry scale={1.5} />
                    <meshStandardMaterial color='mediumPurple' />
                </mesh>
            </group>
            <CustomGeometry />
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>
        </React.Fragment>
    );
};
