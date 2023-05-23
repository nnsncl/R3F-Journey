import React from "react"
import { useKeyboardControls } from "@react-three/drei"
import useGame from "./stores/useGame"

export const Interface = () => {
    const forward = useKeyboardControls((state) => state.forward)
    const rightward = useKeyboardControls((state) => state.rightward)
    const backward = useKeyboardControls((state) => state.backward)
    const leftward = useKeyboardControls((state) => state.leftward)
    const jump = useKeyboardControls((state) => state.jump)

    const restart = useGame((state) => state.restart)
    const phase = useGame((state) => state.phase)

    console.log(phase)
    return (
        <section className="interface" >
            <div className="time">00</div>
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