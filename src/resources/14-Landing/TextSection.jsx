import React from "react"
import { Text } from "@react-three/drei";
import { fadeOnBeforeCompile } from "./utils/fadeMaterialShader";


export const TextSection = ({ title, subtitle, ...restProps }) => {
    return (
        <group {...restProps} >
            {!!title && (
                <Text
                    color={'white'}
                    anchorX={'left'}
                    anchorY={'bottom'}
                    fontSize={0.66}
                    maxWidth={5}
                    lineHeight={1}
                >
                    {title}
                    <meshStandardMaterial
                        color={'white'}
                        envMapIntensity={2}
                        onBeforeCompile={fadeOnBeforeCompile}
                    />
                </Text>
            )}

            <Text
                color={'white'}
                anchorX={'left'}
                anchorY={'top'}
                fontSize={0.25}
                maxWidth={5}
            >
                {subtitle}
                <meshStandardMaterial
                    color={'white'}
                    envMapIntensity={2}
                    onBeforeCompile={fadeOnBeforeCompile}
                />
            </Text>
        </group>
    )
}