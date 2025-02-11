/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MountainRocks(props) {
    const { nodes, materials } = useGLTF("./models/voxel_mountain.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["MountainRocks-7"].geometry}
                material={materials.Material}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
}

useGLTF.preload("./models/voxel_mountain.glb");
