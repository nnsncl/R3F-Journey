import React from "react";
import {
    MeshReflectorMaterial,
    OrbitControls,
    TransformControls,
    PivotControls,
    Html,
    Text,
    Float,
} from "@react-three/drei";

export const Experience = () => {
    const gizmoTargRef = React.useRef();
    const pivotRef = React.useRef();

    return (
        <React.Fragment>
            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <PivotControls
                anchor={[0, 0, 0]}
                depthTest={false}
                lineWidth={3}
                scale={1}
                fixed={false}
            >
                <mesh
                    position-x={-2}
                >
                    <sphereGeometry ref={pivotRef} />
                    <meshStandardMaterial color="orange" />
                    <Html
                        position={[1, 1, 0]}
                        wrapperClass="label"
                        distanceFactor={8}
                        // occlude={[pivotRef, gizmoTargRef]}
                        center
                    >
                        Sphere
                    </Html>
                </mesh>
            </PivotControls>

            {/* mode="scale || translate || rotate..."  */}
            {/* <TransformControls object={gizmoTargRef} mode="translate" /> */}
            <mesh ref={gizmoTargRef} position-x={2} scale={1.5} >
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <Float speed={5} floatIntensity={2}>
                <Text
                    fontSize={1}
                    color='white'
                    characters="abcdefghijklmnopqrstuvwxyz0123456789!"
                    position-y={2}
                    textAlign="center"
                >
                    R3F
                    <meshNormalMaterial />
                </Text>
            </Float>


            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <MeshReflectorMaterial
                    color="#212121"
                    resolution={512}
                    blur={[1000, 1000]}
                    mixBlur={1}
                    mirror={1}
                />
            </mesh>

        </React.Fragment>
    );
};
