import React from 'react';
import {Button as BaseButton} from "antd"
import classNames from "classnames";
import "./Button.scss";
import PropTypes from "prop-types";
const Button = (props) => {
    return (
        <BaseButton {...props} className={classNames("button", props.className, {"button--large": props.size === "large"})} />
        );
};
Button.propTypes = {
    className: PropTypes.string
}
export default Button;
