/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Crystal byiPoly3D
*/

import React from "react";
import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";

export function Crystal(props) {
    const { nodes, materials } = useGLTF("/models/fract_crystal_2.glb");

    const parentGroup = React.useRef()

    React.useEffect(() => {
        const groupWorldPos = new THREE.Vector3();
        parentGroup.current.getWorldPosition(groupWorldPos);

        parentGroup.current.children.forEach((mesh) => {
            // Create a new prop inside each meshes that stores the original position
            mesh.originalPosition = mesh.position.clone();

            const meshWorldPos = new THREE.Vector3();
            mesh.getWorldPosition(meshWorldPos);

            // Store vector's distance from origin's center into a new obj var
            mesh.directionVector = meshWorldPos.clone().sub(groupWorldPos).normalize();
            mesh.targetPosition = mesh.originalPosition.clone().add(mesh.directionVector.clone().multiplyScalar(3))
        });
    }, []);

    return (
        <group {...props} dispose={null} ref={parentGroup} >
            <mesh
                name="crystal_27_cell001"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell001.geometry}
                material={nodes.crystal_27_cell001.material}
                position={[-0.541, -1.692, -0.597]}
            />
            <mesh
                name="crystal_27_cell002"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell002.geometry}
                material={nodes.crystal_27_cell002.material}
                position={[0.38, -1.397, -0.092]}
            />
            <mesh
                name="crystal_27_cell003"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell003.geometry}
                material={nodes.crystal_27_cell003.material}
                position={[-0.088, 0.385, 0.679]}
            />
            <mesh
                name="crystal_27_cell004"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell004.geometry}
                material={nodes.crystal_27_cell004.material}
                position={[-0.579, 0.958, -0.54]}
            />
            <mesh
                name="crystal_27_cell006"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell006.geometry}
                material={nodes.crystal_27_cell006.material}
                position={[0.68, 0.964, 0.548]}
            />
            <mesh
                name="crystal_27_cell007"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell007.geometry}
                material={nodes.crystal_27_cell007.material}
                position={[0.718, 0.984, -0.119]}
            />
            <mesh
                name="crystal_27_cell008"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell008.geometry}
                material={nodes.crystal_27_cell008.material}
                position={[-0.361, 1.129, -0.383]}
            />
            <mesh
                name="crystal_27_cell009"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell009.geometry}
                material={nodes.crystal_27_cell009.material}
                position={[0.109, 1.898, 0.537]}
            />
            <mesh
                name="crystal_27_cell010"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell010.geometry}
                material={nodes.crystal_27_cell010.material}
                position={[0.135, 1.144, 0.604]}
            />
            <mesh
                name="crystal_27_cell012"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell012.geometry}
                material={nodes.crystal_27_cell012.material}
                position={[-0.282, 1.513, 0.592]}
            />
            <mesh
                name="crystal_27_cell013"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell013.geometry}
                material={nodes.crystal_27_cell013.material}
                position={[0.78, 0.668, 0.351]}
            />
            <mesh
                name="crystal_27_cell014"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell014.geometry}
                material={nodes.crystal_27_cell014.material}
                position={[-0.48, 1.082, 0.469]}
            />
            <mesh
                name="crystal_27_cell015"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell015.geometry}
                material={nodes.crystal_27_cell015.material}
                position={[0.19, -0.718, -0.856]}
            />
            <mesh
                name="crystal_27_cell016"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell016.geometry}
                material={nodes.crystal_27_cell016.material}
                position={[0.462, -0.797, 0.403]}
            />
            <mesh
                name="crystal_27_cell017"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell017.geometry}
                material={nodes.crystal_27_cell017.material}
                position={[-0.049, 0.672, 0.073]}
            />
            <mesh
                name="crystal_27_cell018"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell018.geometry}
                material={nodes.crystal_27_cell018.material}
                position={[-0.223, 0.414, -0.543]}
            />
            <mesh
                name="crystal_27_cell019"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell019.geometry}
                material={nodes.crystal_27_cell019.material}
                position={[-0.39, -1.739, -0.19]}
            />
            <mesh
                name="crystal_27_cell020"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell020.geometry}
                material={nodes.crystal_27_cell020.material}
                position={[-0.138, -1.994, -0.449]}
            />
            <mesh
                name="crystal_27_cell021"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell021.geometry}
                material={nodes.crystal_27_cell021.material}
                position={[-0.667, -1.383, 0.408]}
            />
            <mesh
                name="crystal_27_cell022"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell022.geometry}
                material={nodes.crystal_27_cell022.material}
                position={[0.194, 1.521, -0.172]}
            />
            <mesh
                name="crystal_27_cell023"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell023.geometry}
                material={nodes.crystal_27_cell023.material}
                position={[0.64, -0.826, -0.359]}
            />
            <mesh
                name="crystal_27_cell025"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell025.geometry}
                material={nodes.crystal_27_cell025.material}
                position={[-0.408, -0.29, 0.418]}
            />
            <mesh
                name="crystal_27_cell026"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell026.geometry}
                material={nodes.crystal_27_cell026.material}
                position={[-0.556, -1.428, -0.575]}
            />
            <mesh
                name="crystal_27_cell027"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell027.geometry}
                material={nodes.crystal_27_cell027.material}
                position={[-0.26, 0.101, -0.791]}
            />
            <mesh
                name="crystal_27_cell028"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell028.geometry}
                material={nodes.crystal_27_cell028.material}
                position={[0.644, 1.04, 0.211]}
            />
            <mesh
                name="crystal_27_cell029"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell029.geometry}
                material={nodes.crystal_27_cell029.material}
                position={[0.287, -0.319, -0.586]}
            />
            <mesh
                name="crystal_27_cell030"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell030.geometry}
                material={nodes.crystal_27_cell030.material}
                position={[-0.501, -1.758, -0.499]}
            />
            <mesh
                name="crystal_27_cell031"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell031.geometry}
                material={nodes.crystal_27_cell031.material}
                position={[-0.196, -1.676, 0.301]}
            />
            <mesh
                name="crystal_27_cell032"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell032.geometry}
                material={nodes.crystal_27_cell032.material}
                position={[0.448, 1.004, 0.734]}
            />
            <mesh
                name="crystal_27_cell033"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell033.geometry}
                material={nodes.crystal_27_cell033.material}
                position={[-0.462, -0.779, -0.182]}
            />
            <mesh
                name="crystal_27_cell035"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell035.geometry}
                material={nodes.crystal_27_cell035.material}
                position={[-0.103, 1.848, -0.249]}
            />
            <mesh
                name="crystal_27_cell036"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell036.geometry}
                material={nodes.crystal_27_cell036.material}
                position={[-0.307, 1.67, 0.207]}
            />
            <mesh
                name="crystal_27_cell037"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell037.geometry}
                material={nodes.crystal_27_cell037.material}
                position={[-0.132, -1.05, -0.711]}
            />
            <mesh
                name="crystal_27_cell038"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell038.geometry}
                material={nodes.crystal_27_cell038.material}
                position={[0.56, 0.126, 0.23]}
            />
            <mesh
                name="crystal_27_cell039"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell039.geometry}
                material={nodes.crystal_27_cell039.material}
                position={[-0.122, -1.666, -0.635]}
            />
            <mesh
                name="crystal_27_cell040"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell040.geometry}
                material={nodes.crystal_27_cell040.material}
                position={[-0.39, 1.565, -0.426]}
            />
            <mesh
                name="crystal_27_cell041"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell041.geometry}
                material={nodes.crystal_27_cell041.material}
                position={[0.285, -1.816, -0.592]}
            />
            <mesh
                name="crystal_27_cell042"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell042.geometry}
                material={nodes.crystal_27_cell042.material}
                position={[0.673, -1.307, 0.407]}
            />
            <mesh
                name="crystal_27_cell043"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell043.geometry}
                material={nodes.crystal_27_cell043.material}
                position={[-0.42, -1.137, 0.512]}
            />
            <mesh
                name="crystal_27_cell044"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell044.geometry}
                material={nodes.crystal_27_cell044.material}
                position={[0.273, 1.106, -0.517]}
            />
            <mesh
                name="crystal_27_cell045"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell045.geometry}
                material={nodes.crystal_27_cell045.material}
                position={[-0.703, 0.494, -0.02]}
            />
            <mesh
                name="crystal_27_cell046"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell046.geometry}
                material={nodes.crystal_27_cell046.material}
                position={[0.105, -2.151, -0.116]}
            />
            <mesh
                name="crystal_27_cell047"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell047.geometry}
                material={nodes.crystal_27_cell047.material}
                position={[0.39, 1.64, -0.474]}
            />
            <mesh
                name="crystal_27_cell048"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27_cell048.geometry}
                material={nodes.crystal_27_cell048.material}
                position={[0.347, 1.609, 0.532]}
            />

            <mesh
                name="origin"
                castShadow
                receiveShadow
                geometry={nodes.crystal_27.geometry}
                material={nodes.crystal_27.material}
                scale={100}
            />
        </group>
    );
}

useGLTF.preload("/models/fract_crystal_2.glb");