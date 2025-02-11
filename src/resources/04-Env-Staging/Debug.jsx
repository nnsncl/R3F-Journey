import { useControls } from "leva";

export const DebugControls = () => {
    const { showPerfs } = useControls('perfs', {
        showPerfs: false,
    })
    const { ambiant, directional } = useControls('lights', {
        ambiant: {
            value: 0.5,
            min: 0,
            max: 10,
            step: 0.1,
        },
        directional: {
            value: 1.5,
            min: 0,
            max: 10,
            step: 0.1,
        }
    })
    const { spherePosition, sphereColor, sphereVisible } = useControls('sphere', {
        sphereVisible: true,
        spherePosition: {
            value: { x: 2, y: 2 },
            joystick: 'invertY',
            min: -10,
            max: 10,
            step: 0.1,
        },
        sphereColor: 'ivory',
    })
    const { cubePosition, cubeColor } = useControls('cube', {
        cubePosition: {
            value: { x: -2, y: 0.5 },
            joystick: 'invertY',
            min: -10,
            max: 10,
            step: 0.1,
        },
        cubeColor: 'ivory',
    })
    const { contactShadowColor, contactShadowOpacity, contactShadowBlur } = useControls('shadows', {
        contactShadowColor: '#212121',
        contactShadowOpacity: {
            value: 0.2,
            min: 0,
            max: 1,
            step: 0.1,
        },
        contactShadowBlur: {
            value: 5,
            min: 0,
            max: 10,
            step: 0.1,
        },
    })
    const { floorColor } = useControls('floor', {
        floorColor: 'ivory',
    })
    // const { sunPos } = useControls('sky', {
    //     sunPos: {
    //         value: [1, 2, 3]
    //     }
    // })

    return {
        showPerfs,
        ambiant,
        directional,
        spherePosition,
        sphereColor,
        sphereVisible,
        cubePosition,
        cubeColor,
        floorColor,
        contactShadowColor,
        contactShadowOpacity,
        contactShadowBlur,
        // sunPos,
        // envMapIntensity
    }
}