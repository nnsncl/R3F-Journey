import React from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from 'three';
import {
    OrbitControls,
    useHelper,
    AccumulativeShadows,
    BakeShadows,
    SoftShadows,
    Float,
    RandomizedLight,
    ContactShadows,
    Sky,
    Environment,
    MeshReflectorMaterial,
    Lightformer
} from "@react-three/drei";
import { DebugControls } from "./Debug";
import { Perf } from "r3f-perf";

export const Experience = () => {
    const {
        showPerfs,
        // ambiant,
        // directional,
        spherePosition,
        sphereColor,
        sphereVisible,
        cubePosition,
        cubeColor,
        // floorColor,
        contactShadowColor,
        contactShadowOpacity,
        contactShadowBlur,
        // sunPos,
    } = DebugControls()
    const dl_ref = React.useRef();
    // useHelper(dl_ref, THREE.DirectionalLightHelper, 1)
    const { envMapIntensity, height, radius, scale } = useControls('environment map', {
        envMapIntensity: {
            value: 0.6,
            min: 0,
            max: 10,
            step: 0.1,
        },
        height: {
            value: 20,
            min: 0,
            max: 100,
        },
        radius: {
            value: 40,
            min: 10,
            max: 1000,
        },
        scale: {
            value: 30,
            min: 10,
            max: 1000,
        },
    })

    return (
        <React.Fragment>
            <Environment
                // background
                ground={{
                    height,
                    radius,
                    scale
                }}
                // sunset | dawn | night | warehouse | forest | apartment | studio | city | park | lobby
                preset="apartment"
            // resolution={32}
            // files={
            //     './envmaps/the_sky_is_on_fire_2k.hdr'
            //     // [
            //     //     './envmaps/2/px.jpg',
            //     //     './envmaps/2/nx.jpg',
            //     //     './envmaps/2/py.jpg',
            //     //     './envmaps/2/ny.jpg',
            //     //     './envmaps/2/pz.jpg',
            //     //     './envmaps/2/nz.jpg'
            //     // ]
            // }
            >
                <color args={['#000000']} attach="background" />
                <Lightformer
                    position-z={-5}
                    scale={10}
                    color='red'
                    intensity={10}
                    form='ring'
                    toneMapped
                />
                {/* <mesh position-z={-5} scale={10} >
                    <planeGeometry />
                    <meshBasicMaterial color={[100, 0, 0]} />
                </mesh> */}
            </Environment>


            {/* Calculate shadow position once */}
            {/* <BakeShadows /> */}
            {/* <SoftShadows
                size={10}
                samples={10}
                focus={0}
            /> */}
            {showPerfs && (
                <Perf position="bottom-left" visible={showPerfs} />
            )}

            <OrbitControls makeDefault />

            {/* <AccumulativeShadows
                position={[0, -0.99, 0]}
                scale={10}
                color="#d5c197"
                opacity={0.6}
                frames={Infinity}
                blend={200}
                temporal
            >
                <RandomizedLight
                    castShadow
                    intensity={1}
                    amount={8}
                    radius={1}
                    ambient={0.5}
                    bias={0.001}
                    position={[1, 2, 3]}
                />
            </AccumulativeShadows> */}

            <ContactShadows
                position={[0, 0, 0]}
                color={contactShadowColor}
                opacity={contactShadowOpacity}
                blur={contactShadowBlur}
                far={5}
            />

            {/* <directionalLight
                ref={dl_ref}
                castShadow
                position={sunPos}
                intensity={directional}
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={1}
                shadow-camera-far={10}
                shadow-camera-top={5}
                shadow-camera-right={5}
                shadow-camera-bottom={-5}
                shadow-camera-left={-5}
            /> */}
            {/* <ambientLight intensity={ambiant} /> */}

            {/* <Sky sunPosition={sunPos} /> */}

            <Float speed={10} floatIntensity={1}>
                <mesh
                    castShadow
                    position={[spherePosition.x, spherePosition.y, 0]}
                    visible={sphereVisible}
                >
                    <sphereGeometry />
                    <meshStandardMaterial color={sphereColor} envMapIntensity={envMapIntensity} />
                </mesh>
            </Float>

            <mesh
                castShadow
                position={[cubePosition.x, cubePosition.y, 0]}
                scale={1.5}
            >
                <boxGeometry />
                <meshStandardMaterial color={cubeColor} envMapIntensity={envMapIntensity} />
            </mesh>
            {/* <mesh
                position-y={-1}
                rotation-x={- Math.PI * 0.5}
                scale={10}
            >
                <planeGeometry />
                <MeshReflectorMaterial
                    color="ivory"
                    resolution={512}
                    blur={[1000, 1000]}
                    envMapIntensity={envMapIntensity / 2}
                    mixBlur={1000}
                    mirror={1}
                />
                <meshStandardMaterial color={floorColor} />
            </mesh> */}
        </React.Fragment>
    );
};
