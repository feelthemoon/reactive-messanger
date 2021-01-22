import React from 'react';
import formatDistanceToNowStrict from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import PropTypes from "prop-types";
import classNames from "classnames";
import read from "../../assets/read.svg";
import noRead from "../../assets/noread.svg";
import "./Message.scss";
const Message = ({avatar, user, text, date, isMe, isRead, isTyping, attachments}) => {
    return (
        <section className={classNames("message", {"message--isme": isMe, "message--is-typing": isTyping})}>
            <div className="message__avatar" style={{background:`url(${avatar})`}} />
            <div className="message__container">
                <div className="message__content">
                    {(text || isTyping) && <div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping &&
                        <div className="message__typing">
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        }
                    </div>
                    }
                    {
                        isMe && <div className="message__read">
                            {
                                isRead ? <img src={read} alt="read icon" /> : <img src={noRead} alt="no read icon" />
                            }
                        </div>
                    }
                </div>
                {
                    attachments?.length &&
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
                { date && <time className="message__date">{formatDistanceToNowStrict(date, {addSuffix: true, locale:ruLocale})}</time> }
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
    isTyping: PropTypes.bool
}
export default Message;
