import React, { useEffect, useRef } from "react";
import {connect} from "react-redux";

import {Messages} from "../components";
import {messagesActions} from "../redux/actions";

const MessagesContainer = ({currentDialog, fetchMessages,  items, isLoading}) => {
    const messagesRef = useRef(null);
    useEffect(() => {
        currentDialog && fetchMessages(currentDialog);
    }, [currentDialog, fetchMessages]);
    useEffect(() => {
        messagesRef.current?.scrollTo(0, 10000);
    })
    return (
        <Messages
            items={items}
            isLoading={isLoading}
            reference={messagesRef}
        />
    )
};

export default connect(
    ({dialogs, messages}) => ({
        currentDialog: dialogs.currentDialog,
        items: messages.items,
        isLoading: messages.isLoading
    }), messagesActions)(MessagesContainer);
