import * as THREE from 'three';
import { useEffect } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const useExplodingMesh = (group, { distance = 3, enableRotation = true, }) => {
    const scrollData = useScroll();

    useEffect(() => {
        const groupWorldPos = new THREE.Vector3();
        group.current.getWorldPosition(groupWorldPos);

        group.current.children.forEach((mesh) => {
            // Create a new prop inside each meshes that stores the original position
            mesh.originalPosition = mesh.position.clone();

            const meshWorldPos = new THREE.Vector3();
            mesh.getWorldPosition(meshWorldPos);

            // Store vector's distance from origin's center into a new obj var
            mesh.directionVector = meshWorldPos.clone().sub(groupWorldPos).normalize();
        });
    }, []);

    useEffect(() => {
        group.current.children.forEach((mesh) => {
            mesh.targetPosition = mesh.originalPosition
                .clone()
                .add(mesh.directionVector
                    .clone()
                    .multiplyScalar(distance))
        });
    }, [distance])

    useFrame(() => {
        group.current.children.forEach((mesh) => {
            // Toggle visibility on scroll
            if (scrollData.offset < 0.001) {
                if (mesh.name === 'origin') mesh.visible = true
                else mesh.visible = false

            } else {
                if (mesh.name == 'origin') mesh.visible = false
                else mesh.visible = true
            }


            mesh.position.x = THREE.MathUtils.lerp(
                mesh.originalPosition.x,
                mesh.targetPosition.x,
                scrollData.offset, // 0 at page's top, 1 once scrolled
            )
            mesh.position.y = THREE.MathUtils.lerp(
                mesh.originalPosition.y,
                mesh.targetPosition.y,
                scrollData.offset,
            )
            mesh.position.z = THREE.MathUtils.lerp(
                mesh.originalPosition.z,
                mesh.targetPosition.z,
                scrollData.offset,
            )
        });
    });

}