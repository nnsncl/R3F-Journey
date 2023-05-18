import React from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export const Experience = () => {
    const { showPerfs } = useControls('perfs', { showPerfs: false })
    const cubeRef = React.useRef()
    const [showSparkles, setShowSparkles] = React.useState(false)
    const eventHandler = () => {
        cubeRef.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
    }
    const pointerEventHandler = () =>
        !showSparkles && setShowSparkles(!showSparkles)

    useFrame((_, delta) => {
        cubeRef.current.rotation.y += delta
    })
    return (
        <React.Fragment>
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}

            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <mesh
                ref={cubeRef}
                scale={[1, 1, 1]}
                position={[2, 0, 0]}
                onClick={(event) => event.stopPropagation()}
            >
                <boxGeometry />
                <meshStandardMaterial color="red" />
            </mesh>
            <mesh
                ref={cubeRef}
                scale={[1, 1.5, 1]}
                position={[0, 0, 0]}
                onClick={eventHandler}
                onContextMenu={() => setShowSparkles(!showSparkles)}
                onPointerOver={pointerEventHandler}
            >
                <octahedronGeometry />
                <meshStandardMaterial color="ivory" />
            </mesh>


            {showSparkles && (
                <Sparkles
                    count={20}
                    size={4}
                    scale={[4, 4, 4]}
                    position-y={-2}
                    speed={5}
                    color={`hsl(${Math.random() * 360}, 100%, 50%)`}
                />
            )}


        </React.Fragment>
    );
};
