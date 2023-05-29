import React from "react"
import * as THREE from 'three'
import { Environment, Sphere } from "@react-three/drei"
import { Gradient, LayerMaterial } from "lamina"

export const Background = () => {
    const params = {
        colorA: 'tomato',
        colorB: 'ivory',
        start: 0.5,
        end: -1
    }
    return (
        <React.Fragment>
            <Environment resolution={256} background >
                <Sphere
                    scale={[200, 200, 200]}
                    rotation-y={Math.PI * 0.5}
                    rotation-x={Math.PI}
                >
                    <LayerMaterial color={'#FFFFFF'} side={THREE.BackSide}>
                        <Gradient
                            colorA={params.colorA}
                            colorB={params.colorB}
                            start={params.start}
                            end={params.end}
                            axes={'y'}
                        />
                    </LayerMaterial>
                </Sphere>
            </Environment>
        </React.Fragment>

    )
}