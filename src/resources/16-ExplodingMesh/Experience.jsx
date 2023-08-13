import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Crystal } from "./Crystal";

export const Experience = () => {

    return (
        <React.Fragment>
            <color attach="background" args={["#ececec"]} />

            <OrbitControls makeDefault />
            <directionalLight castShadow position={[1, 2, 3]} intensity={1} />
            {/* <ambientLight intensity={1} /> */}

            <Crystal />

        </React.Fragment>
    );
};
