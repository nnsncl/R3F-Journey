import React from "react"
import * as THREE from 'three'
import { Environment, Sphere } from "@react-three/drei"
import { Gradient, LayerMaterial } from "lamina"

export const Background = () => {
    return (
        <React.Fragment>
            <Environment preset="sunset" resolution={16} />
            <Sphere scale={[100, 100, 100]} rotation-y={Math.PI * 0.5}>
                <LayerMaterial
                    lighting="physical"
                    transmission={1}
                    side={THREE.BackSide}
                >
                    <Gradient
                        colorA={"tomato"}
                        colorB={"ivory"}
                        axes={'y'}
                        start={1}
                        end={-1}
                    />
                </LayerMaterial>
            </Sphere>
        </React.Fragment>
    )
}