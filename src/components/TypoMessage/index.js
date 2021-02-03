import React, {useState} from 'react';
import {Button, Input} from "antd";
import {AudioOutlined, CameraOutlined, SendOutlined, SmileOutlined} from "@ant-design/icons";

import "./TypoMessage.scss";


const TypeMessage = () => {
    const [value, setValue] = useState("");
    const changeInputValue = (e) => setValue(e.target.value)
    return (
        <div className="typo">
            <div className="typo__smiles">
                <Button type="link" shape="circle" icon={<SmileOutlined />} />
            </div>
            <Input.TextArea
                onChange={e => changeInputValue(e)}
                className="chat__dialog-input"
                placeholder="Введите текст сообщения..."
                autoSize={true}
            />
            <div className="typo__actions">
                <CameraOutlined />
                {
                    !value ?
                    <Button type="link" shape="circle" icon={<AudioOutlined/>} />
                    :
                        <Button type="link" shape="circle" icon={<SendOutlined/>} />

                }
            </div>
        </div>
    );
};

export default TypeMessage;
