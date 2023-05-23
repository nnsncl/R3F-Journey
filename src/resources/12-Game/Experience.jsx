import React from "react";
import { Physics, Debug } from "@react-three/rapier";
import { BlendFunction } from "postprocessing";
import {
    EffectComposer,
    Bloom,
    Noise,
    DepthOfField,
    Vignette
} from "@react-three/postprocessing";

import useGame from "./stores/useGame";
import { Lights } from "./Lights";
import { Level } from "./Level";
import { Player } from "./Player";

export const Experience = () => {
    const blockCount = useGame((state) => state.blocksCount)
    const blockSeed = useGame((state) => state.blockSeed)
    return (
        <React.Fragment>
            <color args={['#0E0E0E']} attach='background' />
            {/* <EffectComposer>
                <Bloom mipmapBlur intensity={1} luminanceThreshold={1} />
                <Noise premultiply />
                <DepthOfField focusDistance={0.01} focalLength={0.04} bokehScale={3} />
                <Vignette offset={0.3} darkness={0.6} blendFunction={BlendFunction.NORMAL} />
            </EffectComposer> */}
            <Physics>
                <Lights />
                <Player />
                <Level count={blockCount} seed={blockSeed} />
            </Physics>
        </React.Fragment>
    );
};
