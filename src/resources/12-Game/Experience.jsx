import React from "react";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Physics, Debug } from "@react-three/rapier";
import {
    EffectComposer,
    Bloom,
    Noise,
    DepthOfField,
    Vignette
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

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
            <color args={['#0E0E0E']} attach='background' />
            {/* <EffectComposer>
                <Bloom mipmapBlur intensity={1} luminanceThreshold={1} />
                <Noise premultiply />
                <DepthOfField focusDistance={0.01} focalLength={0.04} bokehScale={3} />
                <Vignette offset={0.3} darkness={0.6} blendFunction={BlendFunction.NORMAL} />
            </EffectComposer> */}
            <Physics>
                {debug && <Debug />}
                <Lights />
                <Player />
                <Level />
            </Physics>
        </React.Fragment>
    );
};
