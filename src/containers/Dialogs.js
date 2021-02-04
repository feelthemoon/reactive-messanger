import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import {Dialogs} from "../components";
import {dialogsActions} from "../redux/actions";

const DialogsContainer = ({fetchDialogs, setCurrentDialog, items, userId}) => {
    const [searchValue, setValue] = useState("");
    const [filtered, setFiltered] = useState([...items]);
    const onChangeInput = e => {
        setFiltered(
            items.filter(
                    dialog =>
                        dialog.user.username
                            .toLowerCase()
                            .indexOf(e.target.value.toLowerCase()) >= 0
            )
        );
        setValue(e.target.value);
    }
    useEffect(() => {
        if (!items.length){
            fetchDialogs()
        }else {
            setFiltered(items)
        }
    }, [items, fetchDialogs]);

    return (
        <Dialogs
            items={filtered}
            userId={userId}
            onSearch={onChangeInput}
            inputValue={searchValue}
            onSelectDialog={setCurrentDialog}
        />
    )
};

export default connect(
    ({dialogs}) => dialogs,
    dialogsActions)(DialogsContainer);
