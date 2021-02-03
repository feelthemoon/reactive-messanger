import React, {useState} from "react";
import {Dialogs} from "../components"
const DialogsContainer = ({items, userId}) => {
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
    return (
        <Dialogs
        items={filtered}
        userId={userId}
        onSearch={onChangeInput}
        inputValue={searchValue}
        />
    )
};

export default DialogsContainer;
