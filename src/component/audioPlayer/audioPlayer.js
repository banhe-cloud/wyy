import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import "./audioPlayer.scss"
export default function AudioPlayer() {
    const idRef = useRef()
    function control() {
        console.log(idRef)
        debugger
    }
    return (
        <div className="audioPlayer" onClick={control}>
            4654564
            <audio ref={idRef} controls src="https://music.163.com/song/media/outer/url?id=1481929839.mp3"></audio>
        </div>
    )
}