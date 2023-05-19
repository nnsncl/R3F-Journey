import { Effect } from "postprocessing";
import { Uniform } from "three";
import BlurredVision_FragShader from './shaders/fragment.glsl';

export default class BlurredVisionEffect extends Effect {
    constructor({ frequency, amplitude }) {
        super(
            'BlurredVisionEffect',
            BlurredVision_FragShader,
            {
                uniforms: new Map([
                    ['frequency', new Uniform(frequency)],
                    ['amplitude', new Uniform(amplitude)],
                ])
            }
        )
    }
}