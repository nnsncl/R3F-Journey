import BlurredVisionEffect from "./BlurredVisionEffect";

const BlurredVision = () => {
    const effect = new BlurredVisionEffect();

    return (
        <primitive object={effect} />
    )
}

export default BlurredVision;