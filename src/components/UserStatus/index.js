import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import "./UserStatus.scss";
const UserStatus = ({ isOnline }) => {
    return (
        <div className="chat__dialog-status">
            <span className={classNames("status", {"status--online": isOnline})}>{isOnline ? "online" : "offline"}</span>
        </div>
    );
};
UserStatus.propTypes = {
    isOnline: PropTypes.bool
}
export default UserStatus;
