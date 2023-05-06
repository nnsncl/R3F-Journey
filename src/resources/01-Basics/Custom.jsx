import React from "react";
import { DoubleSide } from 'three';

export const CustomGeometry = () => {
    const verticesCount = 10 * 3; // 10 triangles * angles amount per triangles
    const geometryRef = React.useRef();

    const vertices = React.useMemo(() => {
        const positions = new Float32Array(verticesCount * 3);
        for (let i = 0; i < verticesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 3;
        }

        return positions;
    }, [])

    React.useLayoutEffect(() =>
        geometryRef.current.computeVertexNormals(), [])

    return (
        <mesh>
            <bufferGeometry ref={geometryRef} >
                <bufferAttribute
                    attach="attributes-position"
                    count={verticesCount}
                    itemSize={3}
                    array={vertices}
                />
            </bufferGeometry>
            <meshStandardMaterial color='red' side={DoubleSide} />
        </mesh>
    );
};
