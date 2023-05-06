import React from "react";
import { Canvas } from "@react-three/fiber";

export const Experience = () => {
    return (
        <React.Fragment>
            <mesh scale={1.5} position-x={2} rotation-y={Math.PI * 0.25} >
                <boxGeometry scale={1.5} />
                {/* <boxGeometry args={[1.5, 32, 32]} /> */}
                <meshBasicMaterial color='mediumPurple' />
            </mesh>
            <mesh position-x={-2}>
                <boxGeometry />
                {/* <boxGeometry args={[1.5, 32, 32]} /> */}
                <meshBasicMaterial color='orange' />
            </mesh>
        </React.Fragment>
    );
};
