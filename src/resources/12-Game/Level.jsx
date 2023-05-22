import React from "react";

export const Level = () => {
    return (
        <React.Fragment>
            <mesh castShadow position={[2, 1, 0]} >
                <sphereGeometry />
                <meshStandardMaterial color="ivory" />
            </mesh>

            <mesh castShadow position={[-2, 1, 0]} scale={1.5} >
                <boxGeometry />
                <meshStandardMaterial color="tomato" />
            </mesh>

            <mesh receiveShadow position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="#FFFFFF" />
            </mesh>
        </React.Fragment>
    );
};
