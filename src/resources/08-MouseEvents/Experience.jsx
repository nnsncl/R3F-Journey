import React from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles, meshBounds, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export const Experience = () => {
    const { showPerfs } = useControls('perfs', { showPerfs: false })
    const [showSparkles, setShowSparkles] = React.useState(false)
    const model = useGLTF('./models/hamburger.glb')
    const cubeRef = React.useRef()

    const eventHandler = () =>
        cubeRef.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
    // const pointerEventHandler = () =>
    //     !showSparkles && setShowSparkles(!showSparkles)

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
                scale={[1, 1, 1]}
                position={[2, 0, 0]}
                onClick={(event) => event.stopPropagation()}
            >
                <boxGeometry />
                <meshStandardMaterial color="red" />
            </mesh>

            <primitive
                {...model}
                object={model.scene}
                position={[1, 1, 0]}
                scale={0.1}
                onClick={(event) => {
                    event.stopPropagation()
                    console.log(event.object.name)
                }}
            />

            <mesh
                ref={cubeRef}
                scale={[1, 1.5, 1]}
                position={[0, 0, 0]}
                raycast={meshBounds}
                onClick={eventHandler}
                onContextMenu={() => setShowSparkles(!showSparkles)}
                // onPointerOver={pointerEventHandler}
                onPointerEnter={() => document.body.style.cursor = 'pointer'}
                onPointerLeave={() => document.body.style.cursor = 'default'}
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
useGLTF.preload("./models/hamburger.glb");