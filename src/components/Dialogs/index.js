import React from 'react';

import {DialogItem} from "../index";
import "./Dialogs.scss";

const Dialogs = ({items, userId}) => {
    return(
        <div className="dialogs">
            {
               items.sort(function(a, b) {
                   return b.lastMessage.created_at - a.lastMessage.created_at
               }).map(item => (
                       <DialogItem
                           user={item.lastMessage.user}
                           message={item.lastMessage}
                           unreadCount={999}
                           key={item._id}
                           isMe={item.lastMessage.user._id === userId}
                       />
                       )
               )
            }
        </div>
    )
};

export default Dialogs;
