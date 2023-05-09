import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

export const Experience = () => {
    const {
        ambiant,
        directional,
        cubePositionX,
        spherePositionX,
        sphereColor,
        cubeColor,
        floorColor,
    } = useControls({
        ambiant: {
            value: 0.5,
            min: 0,
            max: 10,
            step: 0.1,
        },
        directional: {
            value: 1.5,
            min: 0,
            max: 10,
            step: 0.1,
        },
        cubePositionX: {
            value: -2,
            min: -10,
            max: 10,
            step: 0.1,
        },
        spherePositionX: {
            value: 2,
            min: -10,
            max: 10,
            step: 0.1,
        },
        sphereColor: 'orange',
        cubeColor: 'mediumpurple',
        floorColor: 'greenyellow'
    })

    return (
        <React.Fragment>
            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={directional} />
            <ambientLight intensity={ambiant} />

            <mesh position-x={spherePositionX} >
                <sphereGeometry />
                <meshStandardMaterial color={sphereColor} />
            </mesh>

            <mesh position-x={cubePositionX} scale={1.5} >
                <boxGeometry />
                <meshStandardMaterial color={cubeColor} />
            </mesh>

            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color={floorColor} />
            </mesh>
        </React.Fragment>
    );
};
