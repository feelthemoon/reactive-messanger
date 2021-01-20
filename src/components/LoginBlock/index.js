import React from 'react';
import classNames from "classnames";
import "./LoginBlock.scss";
const LoginBlock = ({children, className}) => {
    return(
        <div className={classNames("login-block", className)}>{children}</div>
    )
};

export default LoginBlock;
