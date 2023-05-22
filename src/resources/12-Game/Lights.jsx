import React from "react";

export const Lights = () => {
    return (
        <React.Fragment>
            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
        </React.Fragment>
    );
};
