import React from "react";
import { useState, useRef, useImperativeHandle, forwardRef, useContext, useEffect } from "react";
import "./audioPlayer.scss"
import VoiceControl from "../voiceControl/voiceControl"
let AudioPlayer = (props, ref) => {
    const baseUrl = "https://music.163.com/song/media/outer/url"
    const { songList, songIndex } = props;
    const idRef = useRef();
    let player = idRef.current
    const [isPlay, setPlay] = useState(true)
    function changePlay() {
        if (player.paused) {
            setPlay(true)
            play()
        } else {
            setPlay(false)
            pause()
        }
    }
    function play() {
        player.play()
    }
    function pause() {
        player.pause()
    }

    useImperativeHandle(ref, () => ({
        play: play,
        pause: pause,
        next: () => { },
        last: () => { }
    }))

    return (
        <div className="audioPlayer">
            <div className="audioPlayer_center">
                <div className="iconfont lastSong switch" onClick={props.last}></div>
                <div className="center_play">
                    <div className={`iconfont ${isPlay ? 'pause' : 'play'} playBtn`} onClick={changePlay}></div>
                </div>
                <div className="iconfont nextSong switch" onClick={props.next}></div>
            </div>
            <div className="iconfont voice audioPlayer_voice"></div>
            <div className="audioPlayer_voiceControl">
                <VoiceControl />
            </div>

            <audio ref={idRef} autoPlay src={songList.length ? `${baseUrl}?id=${songList[songIndex].id}.mp3` : ""}></audio>
        </div>
    )
}

AudioPlayer = forwardRef(AudioPlayer);
export default AudioPlayer