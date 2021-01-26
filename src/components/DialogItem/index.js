import React from 'react';
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";
import "./DialogItem.scss";
import MessageStatus from "../MessageStatus";
import {Avatar} from "../index";

const getMessageTime = (createdAt) => {
    createdAt = new Date(createdAt);
    return isToday(createdAt) ? format(createdAt, "HH:mm") : format(createdAt, "dd.MM.yyyy");
}
const DialogItem = ({user, message, unreadCount, isMe}) => {
    return(
        <div className={classNames("dialogs__item", {"dialogs__item--online": user?.isOnline})}>
            <div className="dialogs__item-avatar" >
                <Avatar user={user}/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-top">
                    <b>{user.username}</b>
                    <span>
                        {getMessageTime(message.created_at)}
                    </span>
                </div>
                <div className="dialogs__item-bottom">
                    <p>
                        {message.text}
                    </p>
                    <span>
                        {isMe && <MessageStatus isRead={true}/>}
                        {!isMe && unreadCount > 0 &&  <span className={classNames("dialogs__item-count", {"dialogs__item-count--large-number" : unreadCount > 100})}>{unreadCount >= 1000 ? "1k+" : unreadCount}</span> }
                    </span>
                </div>
            </div>
        </div>
    )
};

export default DialogItem;
