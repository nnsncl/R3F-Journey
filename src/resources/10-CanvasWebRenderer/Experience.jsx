import React from "react";
import { Environment, Float, PresentationControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Phone } from "./Phone";

export const Experience = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })

    return (
        <React.Fragment>
            {showPerfs && <Perf position="bottom-left" visible={showPerfs} />}

            <React.Suspense>
                <Environment preset="city" resolution={128} />
            </React.Suspense>
            <color args={['#212121']} attach='background' />

            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <PresentationControls
                config={{ mass: 2, tension: 2000 }}
                snap={{ mass: 4, tension: 2000 }}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
                <Float rotationIntensity={0.5}>
                    <Phone position={[-0.2, -0.5, 0]} />
                </Float>
            </PresentationControls>

        </React.Fragment>
    );
};
