import React from "react";
import { Canvas } from "@react-three/fiber";

export const Experience = () => {
    return (
        <React.Fragment>
            <mesh position-x={-2}>
                <sphereGeometry />
                <meshBasicMaterial color='orange' />
            </mesh>
            <mesh scale={1.5} position-x={2} rotation-y={Math.PI * 0.25} >
                <boxGeometry scale={1.5} />
                {/* <boxGeometry args={[1.5, 32, 32]} /> */}
                <meshBasicMaterial color='mediumPurple' />
            </mesh>
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshBasicMaterial color='greenyellow' />
            </mesh>
        </React.Fragment>
    );
};
