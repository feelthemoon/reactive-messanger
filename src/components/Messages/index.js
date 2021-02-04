import React from 'react';
import PropTypes from "prop-types";
import {Empty, Spin} from "antd";

import {Message} from "../index";

import "./Messages.scss";

const Messages = ({ reference , isLoading, items }) => {
    return (
        <div className="chat__dialog-messages" ref={reference}>
            {isLoading ?
                <div className="center">
                    <Spin size="large" tip="Загружаю Вашу переписку..."/>
                </div>
                : !isLoading && items?.length ?
                    <>
                        {items.map(item => <Message key={item._id} {...item}/>)}
                    </>
                    :
                    <div className="empty">
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Сообщений пока нет..."/>
                    </div>
            }
        </div>
            )
};
Messages.propTypes = {
    items: PropTypes.array
}
export default Messages;
