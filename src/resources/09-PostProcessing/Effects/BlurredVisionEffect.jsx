import { Effect } from "postprocessing";
import BlurredVision_FragShader from './shaders/fragment.glsl';

export default class BlurredVisionEffect extends Effect {
    constructor() {
        super(
            'BlurredVisionEffect',
            BlurredVision_FragShader,
            {}
        )
    }
}