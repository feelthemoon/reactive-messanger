import React from 'react';
import PropTypes from "prop-types";

import read from "../../assets/read.svg";
import noRead from "../../assets/noread.svg";

const MessageStatus = ({ isRead }) => {
    return (
        <div className="message__read">
            {
                isRead ? <img src={read} alt="read icon" />
                : <img src={noRead} alt="no read icon" />
            }
        </div>
    );
};
MessageStatus.propTypes = {
    isRead: PropTypes.bool
}
export default MessageStatus;
