import React, { useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


extend({ OrbitControls });

export const Experience = () => {
    const cubeRef = useRef();
    const groupRef = useRef();
    const { camera, gl } = useThree(); // Called a single time on scene load

    // Called on each frame before rendering the scene
    useFrame((_state, delta) => {
        // groupRef.current.rotation.y += delta;
        cubeRef.current.rotation.y += delta;
    });


    return (
        <React.Fragment>
            <orbitControls args={[camera, gl.domElement]} />
            <group ref={groupRef}>
                <mesh position-x={-2}>
                    <sphereGeometry />
                    <meshBasicMaterial color='orange' />
                </mesh>
                <mesh ref={cubeRef} scale={1.5} position-x={2} rotation-y={Math.PI * 0.25} >
                    <boxGeometry scale={1.5} />
                    {/* <boxGeometry args={[1.5, 32, 32]} /> */}
                    <meshBasicMaterial color='mediumPurple' />
                </mesh>
            </group>

            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshBasicMaterial color='greenyellow' />
            </mesh>
        </React.Fragment>
    );
};
