import React from "react";
import { Environment, Float, OrbitControls, Stage } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Crystal } from "./Crystal";

export const Experience = () => {
    return (
        <React.Fragment>
            <color attach="background" args={["#ececec"]} />

            <OrbitControls enableZoom={false} />
            <Environment background blur={0.8} resolution={256} files={'./envmaps/the_sky_is_on_fire_2k.hdr'} />
            <directionalLight castShadow position={[1, 2, 3]} intensity={1} />

            <Float rotationIntensity={2} speed={3}>
                <Crystal scale={0.42} />
            </Float>

        </React.Fragment>
    );
};
