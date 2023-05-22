import React from "react";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Physics, Debug } from "@react-three/rapier";

import { Lights } from "./Lights";
import { Level } from "./Level";
import { Player } from "./Player";

export const Experience = () => {
    const { showPerfs, debug } = useControls('monitors', {
        showPerfs: false,
        debug: true,
    })

    return (
        <React.Fragment>
            {showPerfs && <Perf position="bottom-left" visible={showPerfs} />}
            <Physics>
                {debug && <Debug />}
                <Lights />
                <Player />
                <Level />
            </Physics>
        </React.Fragment>
    );
};
