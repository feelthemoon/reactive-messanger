import React from 'react';
import {
    TeamOutlined,
    FormOutlined,
    EllipsisOutlined,
} from "@ant-design/icons";

import { TypoMessage, UserStatus } from "../../components";
import {DialogsContainer, MessagesContainer} from "../../containers";

import "./Home.scss";


const Home = () => {
    return (
        <section className="home-page">
            <div className="chat">
                <aside className="chat__sidebar">
                    <div className="chat__sidebar-fixed">
                        <div className="chat__sidebar-header">
                            <div>
                                <TeamOutlined />
                                <span className="chat__sidebar-title">Ваши диалоги</span>
                            </div>
                            <FormOutlined />
                        </div>
                    </div>
                        <DialogsContainer />
                </aside>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div className="center">
                            <b className="chat__dialog-username">Твоя мать</b>
                            <UserStatus isOnline={false} />
                        </div>
                        <EllipsisOutlined className="icon"/>
                    </div>
                    <MessagesContainer />
                    <div className="chat__dialog-new-message">
                        <TypoMessage />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;
