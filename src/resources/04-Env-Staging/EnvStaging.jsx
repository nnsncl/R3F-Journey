import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';
import { Leva } from "leva";
// import * as THREE from 'three';

export const EnvStaging = () => {

    // const gl_created = ({ gl, scene }) => {
    //     // Set the background color into the canvas
    //     // gl.setClearColor('#212121', 1);
    //     // scene.background = new THREE.Color('#212121');
    // }

    return (
        <React.Fragment>
            <Leva collapsed />
            <Canvas
                // shadows={true}
                // onCreated={gl_created}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [4, 6, 15]
                }}
            >
                <color args={['ivory']} attach='background' />
                <Experience />
            </Canvas>
        </React.Fragment>

    );
};
