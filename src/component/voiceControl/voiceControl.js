import React from "react";
import { useState, useEffect, useRef } from "react";
import "./voiceControl.scss"
export default function VoiceControl(props) {
    const idRef = useRef();
    const btnRef = useRef();
    let isClick = true;
    useEffect(() => {
        document.onmouseup = function () {
            document.onmousemove = null;
            console.log("zou3")
        }
    }, [])
    function changeVoice(e) {
        // if (!isClick) return
        // console.log("zou1")
        // btnRef.current.style.left = e.nativeEvent.offsetX + "px"
    }

    function voiceMove(e) {
        let x = e.clientX;
        document.onmousemove = function (_e) {
            isClick = false;
            console.log("zou2")
            let val = btnRef.current.style.left;
            let moveSpace = Number(val.split("px")[0]) + _e.clientX - x;
            moveSpace = moveSpace < 0 ? 0 : moveSpace > 100 ? 100 : moveSpace
            btnRef.current.style.left = moveSpace + "px";
            x = _e.clientX;

            props.voiceChange(moveSpace / 100)
        }
    }
    return (
        <div id="voice" ref={idRef} className="voiceControl" onClick={changeVoice}>
            <div ref={btnRef} className="voiceControl_btn"
                onMouseDown={voiceMove}
            >
            </div>
        </div>
    )
}
VoiceControl.defaultProps = {
    voiceChange: function () { }
}