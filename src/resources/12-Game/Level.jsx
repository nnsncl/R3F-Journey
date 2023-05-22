import React from "react";

const BlockStart = ({ position = [0, 0, 0] }) => {
    return (
        <group position={position} >
            <mesh receiveShadow position={[0, -0.1, 0]} >
                <boxGeometry args={[4, 0.2, 4]} />
                <meshStandardMaterial color='ivory' />
            </mesh>
        </group>
    )
}
export const Level = () => {
    return (
        <React.Fragment>
            <BlockStart position={[0, 0, 0]} />
        </React.Fragment>
    );
};
