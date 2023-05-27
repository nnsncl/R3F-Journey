import React from "react"
import * as THREE from 'three'
import { Environment, Sphere } from "@react-three/drei"
import { Gradient, LayerMaterial } from "lamina"

export const Background = () => {
    const params = {
        colorA: 'tomato',
        colorB: 'ivory',
        start: 0.25,
        end: -0.5
    }
    return (
        <React.Fragment>
            <Sphere scale={[100, 100, 100]} rotation-y={Math.PI * 0.5}>
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
            <Environment resolution={256} >
                <Sphere
                    scale={[500, 500, 500]}
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