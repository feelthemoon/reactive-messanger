import React from 'react';
import orderBy from "lodash/orderBy";
import {DialogItem} from "../index";
import { Input } from 'antd';

const { Search } = Input;
const Dialogs = ({items, userId, onSearch, inputValue }) => {
    return(
        <div className="dialogs">
            <div className="chat__sidebar-search">
                <Search
                    placeholder="Поиск среди контактов"
                    onChange={onSearch}
                    value={inputValue}
                    enterButton
                />
            </div>
            {
                orderBy(items, ["created_at"], ["desc", "desc"])
               .map(item => (
                       <DialogItem
                           user={item.user}
                           message={item}
                           unreadCount={9}
                           key={item._id}
                           isMe={item.user._id === userId}
                       />
                       )
               )
            }
        </div>
    )
};

export default Dialogs;
