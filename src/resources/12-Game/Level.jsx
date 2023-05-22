import React from "react"
import * as THREE from 'three'


THREE.ColorManagement.legacyMode = false
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const materials = {
    floor01: new THREE.MeshStandardMaterial({ color: 'limegreen' }),
    floor02: new THREE.MeshStandardMaterial({ color: 'greenyellow' }),
    floor03: new THREE.MeshStandardMaterial({ color: 'orangered' }),
    wall: new THREE.MeshStandardMaterial({ color: 'slategrey' }),
}

const BlockStart = ({ position = [0, 0, 0] }) => {

    return (
        <group position={position} >
            {/* Floor */}
            <mesh
                receiveShadow
                geometry={boxGeometry}
                material={materials.floor01}
                position={[0, -0.1, 0]}
                scale={[4, 0.2, 4]}
            />
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
