/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Source: https://sketchfab.com/3d-models/pegion-2f6e0a400fb0439a9b64ca7549c51198
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useConfigurator from "./stores/useConfigurator";

export function Birb(props) {
    const { nodes, materials } = useGLTF("./models/birb.glb");
    const colors = useConfigurator((state) => state.colors)

    const body = React.useRef()
    const wings = React.useRef()
    const pupils = React.useRef()

    useFrame(({ clock }, delta) => {
        body.current.position.y -= (delta * Math.sin(clock.getElapsedTime())) * 0.1
        body.current.rotation.x -= (delta * Math.sin(clock.getElapsedTime())) * 0.1
        pupils.current.position.y += (delta * Math.cos(clock.getElapsedTime())) * 0.05
        wings.current.position.y += (delta * Math.sin(clock.getElapsedTime())) * 0.05
    })
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0, 0]} rotation={[0.06, 0, 0]} scale={1}>
                <group ref={body}>
                    <mesh
                        castShadow
                        receiveShadow
                        scale={0.47}
                        // geometry={nodes.Object_10.geometry}
                        material={materials.Material}
                        position={[0, 2, -1.13]}
                        rotation={[-Math.PI * 0.5, 0, 0]}
                    >
                        <coneGeometry args={[1, 2, 8]} />
                        <meshStandardMaterial color={colors.beak} />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        rotation={[0, 0.09, 0]}
                        scale={[0.29, 0.53, 0.53]}
                        geometry={nodes.Object_6.geometry}
                    >
                        <meshStandardMaterial color={colors.eyes} />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        ref={pupils}
                        position={[0, 0.05, 0]}
                        rotation={[-0.08, -0.02, 0]}
                        scale={[0.1, 0.19, 0.19]}
                        geometry={nodes.Object_8.geometry}
                    >
                        <meshStandardMaterial color={colors.pupils} />
                    </mesh>


                    <mesh
                        castShadow
                        receiveShadow
                        ref={wings}
                        rotation={[0.14, -0.1, 0]}
                        scale={[0.27, 0.64, 0.71]}
                        geometry={nodes.Object_18.geometry}
                    >
                        <meshStandardMaterial color={colors.wings} />
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.body.geometry}
                    >
                        <meshStandardMaterial color={colors.body} />
                    </mesh>

                </group>

                <group>
                    <mesh
                        castShadow
                        receiveShadow
                        rotation={[1.55, 0, 0]}
                        scale={[0.15, 0.49, 0.15]}
                        geometry={nodes.Object_14.geometry}
                    >
                        <meshStandardMaterial flatShading color={colors.legs} />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        position={[0, 0.13, 0.11]}
                        rotation={[0.03, 0, 0]}
                        scale={[0.19, 0.62, 0.19]}
                        geometry={nodes.Object_12.geometry}
                    >
                        <meshStandardMaterial color={colors.legs} />
                    </mesh>
                </group>


            </group>
        </group>
    );
}

useGLTF.preload("./models/birb.glb");