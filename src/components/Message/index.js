import React, {useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import waveImg from "../../assets/wave.svg";
import pauseImg from "../../assets/pause.svg";
import playImg from "../../assets/play.svg";

import {convertCurrentTime} from "../../utils/helpers";
import Time from "../Time";
import "./Message.scss";
import MessageStatus from "../MessageStatus";
import {Avatar} from "../index";

const MessageAudio = ({audio}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioElement = useRef(null);
    useEffect(()=>{
        audioElement.current.addEventListener("durationchange", () => {
            setCurrentTime(audioElement.current.duration);
        }, false)
        audioElement.current.addEventListener("playing", () => {
                setIsPlaying(true);
            }, false)
            audioElement.current.addEventListener("ended", () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            }, false)
            audioElement.current.addEventListener("pause", () => {
                setIsPlaying(false);
            }, false)
            audioElement.current.addEventListener("timeupdate", () => {
                const duration = audioElement.current.duration || 0;
                setCurrentTime(audioElement.current.currentTime)
                setProgress(audioElement.current.currentTime / duration * 100);
            }, false)
    }, [])
    const togglePlay = () => {
        !isPlaying ? audioElement.current.play() : audioElement.current.pause();
    }

    return(
        <div className="message__audio">
            <audio ref={audioElement} src={audio} preload="auto" />
            <div className="message__audio-progress" style={{width:`${progress}%`}} />
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                        {isPlaying ? <img src={pauseImg} alt="pause"/> : <img src={playImg} alt="play"/>}
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={waveImg} alt="wave"/>
                </div>
                <time className="message__audio-duration">
                    {convertCurrentTime(currentTime)}
                </time>
            </div>
        </div>
    )
}
const Message = (
    {
        avatar,
        user,
        text,
        date,
        isMe,
        isRead,
        isTyping,
        attachments,
        audio
    }) => {

    return (
        <section className={classNames("message", {
            "message--isme": isMe,
            "message--is-typing": isTyping,
            "message--image": attachments?.length === 1,
            "message--is-audio": audio
        })}>
            <div className="message__avatar" >
                <Avatar user={user} />
            </div>
            <div className="message__container">
                <div className="message__content">
                    {(audio || text || isTyping) &&
                    <div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping &&
                        <div className="message__typing">
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        }
                        {
                            audio && <MessageAudio audio={audio}/>
                        }
                    </div>
                    }
                    {
                        attachments?.length === 1 &&
                        <div className="message__attachments">
                            {
                                attachments.map(item => (
                                    <div className="message__attachments-item" key={item.id}>
                                        <img src={item.url} alt={item.filename}/>
                                    </div>
                                ))
                            }
                        </div>
                    }
                    {
                        isMe && <MessageStatus isRead={isRead} />
                    }
                </div>
                {
                    attachments?.length > 1 &&
                    <div className="message__attachments">
                        {
                            attachments.map(item => (
                                <div className="message__attachments-item" key={item.id}>
                                    <img src={item.url} alt={item.filename}/>
                                </div>
                            ))
                        }
                    </div>
                }
                { date && <Time date={date} /> }
            </div>

        </section>
    )
};


Message.defaultProps = {
    user: {}
}
Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.object,
    date: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    isRead: PropTypes.bool,
    isMe: PropTypes.bool,
    audio: PropTypes.string,
}
export default Message;
