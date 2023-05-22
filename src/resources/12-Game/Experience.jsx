import React from "react";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";
import { Physics, Debug } from "@react-three/rapier";

import { Lights } from "./Lights";
import { Level } from "./Level";


export const Experience = () => {
    const { showPerfs, debug } = useControls('monitors', {
        showPerfs: false,
        debug: true,
    })

    return (
        <React.Fragment>
            {showPerfs && <Perf position="bottom-left" visible={showPerfs} />}

            <OrbitControls makeDefault />
            <Physics>
                {debug && <Debug />}
                <Lights />
                <Level />
            </Physics>
        </React.Fragment>
    );
};
