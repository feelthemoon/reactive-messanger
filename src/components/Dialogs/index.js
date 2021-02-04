import React from 'react';
import orderBy from "lodash/orderBy";
import {Empty, Input} from 'antd';
import {SearchOutlined} from "@ant-design/icons";

import {DialogItem} from "../index";


const Dialogs = ({ items, userId, onSearch, inputValue, onSelectDialog }) => {
    return(
        <div className="dialogs">
            <div className="chat__sidebar-search">
                <Input
                    placeholder="Поиск среди контактов"
                    onChange={onSearch}
                    value={inputValue}
                    suffix={<SearchOutlined />}
                />
            </div>
            {
                items.length ?
                orderBy(items, ["created_at"], ["desc", "desc"])
               .map(item => (
                       <DialogItem
                           key={item._id}
                           isMe={item.user._id === userId}
                           onSelect={onSelectDialog}
                           {...item}
                       />
                       )
               ) : <Empty description="Не могу найти..."/>
            }
        </div>
    )
};

export default Dialogs;
