import * as THREE from 'three';
import { useEffect } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const useExplodingMesh = (group, {
    distance = 3,
    enableRotation = true,
    hideOrigin = false,
}) => {
    const scrollData = useScroll();

    useEffect(() => {
        const groupWorldPos = new THREE.Vector3();
        group.current.getWorldPosition(groupWorldPos);

        group.current.children.forEach((mesh) => {
            /* Explosion */
            // Create a new prop inside each meshes that stores the original position
            mesh.originalPosition = mesh.position.clone();

            const meshWorldPos = new THREE.Vector3();
            mesh.getWorldPosition(meshWorldPos);

            // Store vector's distance from origin's center into a new obj var
            mesh.directionVector = meshWorldPos.clone().sub(groupWorldPos).normalize();


            /* Rotation */
            mesh.originalRotation = mesh.rotation.clone();
            mesh.targetRotation = new THREE.Euler(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            )
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
            if (hideOrigin) {
                if (scrollData.offset < 0.001) {
                    if (mesh.name === 'origin') mesh.visible = true
                    else mesh.visible = false

                } else {
                    if (mesh.name == 'origin') mesh.visible = false
                    else mesh.visible = true
                }
            }
            /* Explosion */
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

            /* Rotation */
            if (enableRotation) {
                mesh.rotation.x = THREE.MathUtils.lerp(
                    mesh.originalRotation.x,
                    mesh.targetRotation.x,
                    scrollData.offset, // 0 at page's top, 1 once scrolled
                )
                mesh.rotation.y = THREE.MathUtils.lerp(
                    mesh.originalRotation.y,
                    mesh.targetRotation.y,
                    scrollData.offset,
                )
                mesh.rotation.z = THREE.MathUtils.lerp(
                    mesh.originalRotation.z,
                    mesh.targetRotation.z,
                    scrollData.offset,
                )
            }
        });
    });
}