import { Instance, Instances, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React from "react"
import { AdditiveBlending, DoubleSide, MathUtils } from "three"

const INSTANCES = 420
const MAX_TRAIL_OPACITY = 0.1

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
    const scroll = useScroll()
    const trailsMaterialRef = React.useRef()
    const lastScroll = React.useRef(0)

    useFrame((_, delta) => {
        if (scroll.offset - lastScroll.current > 0.001) {
            trailsMaterialRef.current.opacity = MAX_TRAIL_OPACITY
        }

        lastScroll.current = scroll.offset
        if (trailsMaterialRef.current.opacity > 0) {
            trailsMaterialRef.current.opacity -= delta * 0.2
        }

    })

    return (
        <group>
            <Instances>
                <planeGeometry args={[1, 0.01]} />
                <meshBasicMaterial
                    ref={trailsMaterialRef}
                    transparent
                    opacity={0}
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