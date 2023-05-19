import { forwardRef } from "react";
import BlurredVisionEffect from "./BlurredVisionEffect";

const BlurredVision = forwardRef((props, ref) => {
    const effect = new BlurredVisionEffect(props);

    return (
        <primitive
            ref={ref}
            object={effect}
        />
    )
})

export default BlurredVision;