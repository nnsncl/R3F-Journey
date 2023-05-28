import { Instance, Instances } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React from "react"
import { AdditiveBlending, DoubleSide, MathUtils } from "three"

const INSTANCES = 420

const TrailShape = () => {
    const ref = React.useRef()
    let randPos = { x: 0, y: 0, z: 0 }
    let randSpeed = 0

    const resetRandom = () => {
        randPos = {
            x: MathUtils.randFloatSpread(12),
            y: MathUtils.randFloatSpread(8),
            z: MathUtils.randFloatSpread(12),
        }
        randSpeed = MathUtils.randFloat(16, 20)
    }
    resetRandom()

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.position.z += randSpeed * delta

            if (ref.current.position.z > 5) {
                resetRandom()
                ref.current.position.z = randPos.z
            }
        }
    })

    return (
        <Instance
            ref={ref}
            color='white'
            position={[randPos.x, randPos.y, randPos.z]}
            rotation-y={Math.PI * 0.5}
        />
    )

}

export const Trails = () => {
    return (
        <group>
            <Instances>
                <planeGeometry args={[1, 0.01]} />
                <meshBasicMaterial
                    transparent
                    opacity={0.1}
                    side={DoubleSide}
                    blending={AdditiveBlending}
                />
                {Array(INSTANCES).fill().map((_, key) => (
                    <TrailShape key={key} />
                ))}
            </Instances>
        </group>
    )
}