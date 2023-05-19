import { Effect, BlendFunction } from "postprocessing";
import { Uniform } from "three";
import BlurredVision_FragShader from './shaders/fragment.glsl';

const defaultProps = {
    frequency: 2,
    amplitude: 0.1,
    offset: 0,
    blendFunction: BlendFunction.DARKEN
}
export default class BlurredVisionEffect extends Effect {
    constructor({
        frequency = defaultProps.frequency,
        amplitude = defaultProps.amplitude,
        offset = defaultProps.amplitude,
        blendFunction = defaultProps.blendFunction
    }) {
        super(
            'BlurredVisionEffect',
            BlurredVision_FragShader,
            {
                blendFunction,
                uniforms: new Map([
                    ['frequency', new Uniform(frequency)],
                    ['amplitude', new Uniform(amplitude)],
                    ['offset', new Uniform(offset)],
                ])
            }
        )
    }

    update(_renderer, _inputBuffer, deltaTime) {
        this.uniforms.get('offset').value += deltaTime
    }
}