import React from 'react';
import {
    TeamOutlined,
    FormOutlined,
    EllipsisOutlined,
} from "@ant-design/icons";

import {Message, TypoMessage, UserStatus} from "../../components";
import {DialogsContainer} from "../../containers";
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
                        <DialogsContainer items={[
                            {
                                "_id": "6010f936a90a8baf04b1f16a",
                                "text": "Voluptate velit incididunt deserunt enim mollit Lorem deserunt et sunt eiusmod esse et ad non. Pariatur pariatur nostrud fugiat exercitation adipisicing ullamco duis esse officia sunt. Eu elit magna incididunt reprehenderit reprehenderit reprehenderit sunt tempor laborum commodo excepteur.",
                                "isRead": true,
                                "created_at": "Tuesday Nov 2018 02:35:48",
                                "user": {
                                    "_id": "6010f936eedbeb45607b7a13",
                                    "username": "Swanson Reynolds",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6010f936a72135cbb60132d7",
                                "text": "Sint sint quis ex duis aliquip esse veniam nisi ex ad laboris dolore. Esse nulla aute pariatur esse laborum veniam in sit deserunt adipisicing voluptate magna. Ut id duis eiusmod duis fugiat laboris.",
                                "isRead": false,
                                "created_at": "Monday Nov 2009 07:13:43",
                                "user": {
                                    "_id": "6010f9368e88c23a182f67f5",
                                    "username": "Clare Bauer",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6010f936e87fe99fafc8be44",
                                "text": "Et eiusmod laborum tempor cillum culpa qui laborum. Sit ea nulla ex laborum consequat minim proident quis ad dolore adipisicing duis anim. Culpa minim proident amet officia laborum laboris exercitation aliqua adipisicing mollit velit qui.",
                                "isRead": false,
                                "created_at": "Monday Feb 2018 10:28:03",
                                "user": {
                                    "_id": "6010f936c927519f8997ef4c",
                                    "username": "Ballard Golden",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6010f936281368766d7a4802",
                                "text": "Nisi et cupidatat elit consectetur. Et fugiat qui veniam Lorem aliqua fugiat. Ipsum irure occaecat aliquip non sunt reprehenderit cupidatat aliquip aliqua eiusmod.",
                                "isRead": false,
                                "created_at": "Thursday Feb 2009 01:07:13",
                                "user": {
                                    "_id": "6010f936a7d02062c1810dd7",
                                    "username": "Baker Tucker",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6010f936a9680218afc48f79",
                                "text": "Aute dolore proident enim sint enim eiusmod eu esse nostrud. Culpa culpa nisi minim aliqua veniam laboris nisi deserunt qui. Consequat sunt tempor cupidatat proident cupidatat aliqua officia irure ut in dolor laboris qui minim.",
                                "isRead": false,
                                "created_at": "Saturday Jan 2021 12:45:49",
                                "user": {
                                    "_id": "6010f93637445b9bfd227c6e",
                                    "username": "Carr Leon",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6010f936c883b54ac0067cba",
                                "text": "Elit minim non ut ullamco commodo velit elit minim velit cupidatat. Cupidatat cillum pariatur qui esse et ut magna ut culpa quis anim deserunt cupidatat incididunt. Elit in fugiat cupidatat do anim nulla laborum sunt veniam officia deserunt.",
                                "isRead": false,
                                "created_at": "Friday May 2001 13:10:35",
                                "user": {
                                    "_id": "6010f93615294018c6f4373c",
                                    "username": "Cathryn Vazquez",
                                    "avatar": null
                                }
                            },
                        ]}/>
                </aside>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div className="center">
                            <b className="chat__dialog-username">Твоя мать</b>
                            <UserStatus isOnline={false} />
                        </div>
                        <EllipsisOutlined className="icon"/>
                    </div>
                    <div className="chat__dialog-messages">

                        <Message
                            avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                            date={new Date()}
                            text="Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)Привет! Тут появились голосовые сообщения :)"
                            // audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
                        />
                        <Message
                            avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                            date={new Date()}
                            // text="Привет! Тут появились голосовые сообщения :)"
                            audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
                        />
                        <Message
                            avatar="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
                            text="МыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМы"
                            date={new Date()}
                            isMe={true}
                            isRead={false}
                            attachments={[
                                {
                                    filename: 'image.jpg',
                                    url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                                    id: 1
                                },
                                {
                                    filename: 'image.jpg',
                                    url: "https://source.unsplash.com/100x100/?random=2&nature,water",
                                    id: 2
                                },
                                {
                                    filename: 'image.jpg',
                                    url: "https://source.unsplash.com/100x100/?random=3&nature,water",
                                    id: 3
                                }
                            ]}
                        />
                        <Message
                            avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                            isTyping={true}
                        />
                        <Message
                            avatar="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
                            date={new Date()}
                            isMe={true}
                            isRead={true}
                            attachments={[
                                {
                                    filename: 'image.jpg',
                                    url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                                    id: 1
                                }
                            ]}
                        />
                        <Message
                            avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                            date={new Date()}
                            text="Привет! Тут появились голосовые сообщения :)"
                            // audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
                        />
                        <Message
                            avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                            date={new Date()}
                            text="Привет! Тут появились голосовые сообщения :)"
                            // audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
                        />
                        <Message
                            avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                            date={new Date()}
                            text="Привет! Тут появились голосовые сообщения :)"
                            // audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
                        />
                        <Message
                            avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                            date={new Date()}
                            text="Привет! Тут появились голосовые сообщения :)"
                            // audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
                        />
                        <Message
                            avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                            date={new Date()}
                            text="Привет! Тут появились голосовые сообщения :)"
                            // audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
                        />
                        <Message
                            avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                            date={new Date()}
                            text="Привет! Тут появились голосовые сообщения :)"
                            // audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
                        />
                        <Message
                            avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                            date={new Date()}
                            text="Привет! Тут появились голосовые сообщения :)"
                            // audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
                        />
                        <Message
                            avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                            date={new Date()}
                            text="Привет! Тут появились голосовые сообщения :)"
                            // audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
                        />
                    </div>
                    <div className="chat__dialog-new-message">
                        <TypoMessage />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;
