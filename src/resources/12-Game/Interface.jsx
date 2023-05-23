import React from "react"
import { addEffect } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import useGame from "./stores/useGame"

export const Interface = () => {
    const restart = useGame((state) => state.restart)
    const phase = useGame((state) => state.phase)

    const forward = useKeyboardControls((state) => state.forward)
    const rightward = useKeyboardControls((state) => state.rightward)
    const backward = useKeyboardControls((state) => state.backward)
    const leftward = useKeyboardControls((state) => state.leftward)
    const jump = useKeyboardControls((state) => state.jump)

    const timerRef = React.useRef()

    React.useEffect(() => {
        const unsubscribeEffect = addEffect(() => {
            const state = useGame.getState()
            let elapsedTime = 0

            if (state.phase === "playing")
                elapsedTime = Date.now() - state.startTime
            else if (state.phase === "ended")
                elapsedTime = state.endTime - state.startTime

            elapsedTime = elapsedTime / 1000
            elapsedTime = elapsedTime.toFixed(2)

            if (timerRef.current)
                timerRef.current.textContent = elapsedTime
        })

        return () => {
            unsubscribeEffect()
        }
    }, [])

    return (
        <section className="interface" >
            <div ref={timerRef} className="time" />

            {phase === 'ended' && (
                <div className="restart" onClick={restart} >Restart</div>
            )}

            <div className="controls">
                <div className="raw">
                    <div className={`${forward ? 'active' : ''} key`} />
                </div>
                <div className="raw">
                    <div className={`${leftward ? 'active' : ''} key`} />
                    <div className={`${backward ? 'active' : ''} key`} />
                    <div className={`${rightward ? 'active' : ''} key`} />
                </div>
                <div className="raw">
                    <div className={`${jump ? 'active' : ''} key large`} />
                </div>
            </div>
        </section>
    )
}