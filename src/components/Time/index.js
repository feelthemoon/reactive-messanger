import React from 'react';
import formatDistanceToNowStrict from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import PropTypes from "prop-types";

const Time = ({date}) => {
    return (
        <time className="message__date">
            {formatDistanceToNowStrict(date, {addSuffix: true, locale:ruLocale})}
        </time>
    );
};
Time.propTypes = {
    date: PropTypes.object
}
export default Time;
