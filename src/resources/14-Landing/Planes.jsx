/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { MeshStandardMaterial, DoubleSide } from 'three';
import { useGLTF } from "@react-three/drei";

const material = new MeshStandardMaterial({
    color: 'ivory',
    metalness: 0,
    roughness: 1,
    side: DoubleSide,
})
export function Plane(props) {
    const { nodes } = useGLTF("./models/paper_plane_01.glb");

    return (
        <group {...props} dispose={null}>
            <group
                position={[0, 0, 0]}
                rotation={[Math.PI * 0.5, 0, 0]}
                scale={0.001}
            >
                <mesh
                    castShadow
                    geometry={nodes["Plane_Material_#2_0"].geometry}
                    material={material}
                />
            </group>
            {/*
            <group position={[0, 0, 2]} rotation={[Math.PI * 0.5, 0, 0]} scale={0.001}>
                <mesh
                    castShadow
                    geometry={nodes["Plane001_Material_#2_0"].geometry}
                    material={material}
                />
            </group>
            <group position={[0, 0, 4]} rotation={[Math.PI * 0.5, 0, 0]} scale={0.001}>
                <mesh
                    castShadow
                    geometry={nodes["Plane003_Material_#2_0"].geometry}
                    material={material}
                />
            </group>
            <group position={[0, 0, -2]} rotation={[Math.PI * 0.5, 0, 0]} scale={0.001}>
                <mesh
                    castShadow
                    geometry={nodes["Plane001_Material_#2_0"].geometry}
                    material={material}
                />
            </group>
            <group position={[0, 0, -4]} rotation={[Math.PI * 0.5, 0, 0]} scale={0.001}>
                <mesh
                    castShadow
                    geometry={nodes["Plane002_Material_#2_0"].geometry}
                    material={material}
                />
            </group> */}
        </group>
    );
}

useGLTF.preload("./models/paper_plane_01.glb");