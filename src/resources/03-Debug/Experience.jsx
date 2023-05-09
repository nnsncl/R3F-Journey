import React from "react";
import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";

export const Experience = () => {
    const { ambiant, directional } = useControls('lights', {
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
        }
    })
    const { spherePosition, sphereColor, sphereVisible } = useControls('sphere', {
        sphereVisible: true,
        spherePosition: {
            value: { x: 2, y: 0 },
            joystick: 'invertY',
            min: -10,
            max: 10,
            step: 0.1,
        },
        sphereColor: 'orange',
    })
    const { cubePosition, cubeColor } = useControls('cube', {
        cubePosition: {
            value: { x: -2, y: 0 },
            joystick: 'invertY',
            min: -10,
            max: 10,
            step: 0.1,
        },
        cubeColor: 'mediumpurple',
    })
    const { floorColor } = useControls('floor', {
        floorColor: 'greenyellow',
    })
    const { /** miscs **/ } = useControls('misc', {
        dropdown: {
            options: ['a', 'b', 'c']
        },
        click: button(() => {
            console.log('Click')
        })
    })

    return (
        <React.Fragment>
            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={directional} />
            <ambientLight intensity={ambiant} />

            <mesh position={[spherePosition.x, spherePosition.y, 0]} visible={sphereVisible}>
                <sphereGeometry />
                <meshStandardMaterial color={sphereColor} />
            </mesh>

            <mesh position={[cubePosition.x, cubePosition.y, 0]} scale={1.5} >
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
