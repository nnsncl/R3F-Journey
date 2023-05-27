import React from "react"
import { Text } from "@react-three/drei";

export const TextSection = ({ title, subtitle, ...restProps }) => {
    return (
        <group {...restProps} >
            {!!title && (
                <Text
                    color={'white'}
                    anchorX={'left'}
                    anchorY={'bottom'}
                    fontSize={0.5}
                    maxWidth={3}
                    lineHeight={1.2}
                >
                    {title}
                </Text>
            )}

            <Text
                color={'white'}
                anchorX={'left'}
                anchorY={'top'}
                fontSize={0.25}
                maxWidth={3}
            >
                {subtitle}
            </Text>
        </group>
    )
}