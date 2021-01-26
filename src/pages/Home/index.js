import React from 'react';
import {Dialogs, Message} from "../../components";
const Home = () => {
    return (
        <div className="home-page">
            <Dialogs items={[
                {
                    _id: Math.random(),
                    lastMessage: {
                        text: "Hello everyone I'm an Iron Man!",
                        isRead: false,
                        created_at: new Date("Mon May 11 2011 00:11:01"),
                        user:{
                            _id: "bf54c98a69b2da90ae4bea3ba62e1c5d",
                            username: "ыыыы",
                            avatar: null
                        },
                    }

                },
                {
                    _id: Math.random(),
                    lastMessage: {
                        text: "I am your Enigma!",
                        isRead: false,
                        created_at: new Date("Mon May 11 2011 00:11:01"),
                        user:{
                            _id: 1,
                            username: "Alan Turing",
                            avatar: "https://media.npr.org/assets/img/2018/11/21/gettyimages-962142720-3f4af695a639cbc14deb90e88287cd3c19b676f4-s800-c85.jpg"
                        },
                    }

                }
            ]}/>
            {/*<Message*/}
            {/*    avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"*/}
            {/*    date={new Date()}*/}
            {/*    // text="Привет! Тут появились голосовые сообщения :)"*/}
            {/*    audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"*/}
            {/*    text="МыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМыМы"*/}
            {/*    date={new Date()}*/}
            {/*    isMe={true}*/}
            {/*    isRead={false}*/}
            {/*    attachments={[*/}
            {/*        {*/}
            {/*            filename: 'image.jpg',*/}
            {/*            url: "https://source.unsplash.com/100x100/?random=1&nature,water",*/}
            {/*            id: 1*/}
            {/*        },*/}
            {/*        {*/}
            {/*            filename: 'image.jpg',*/}
            {/*            url: "https://source.unsplash.com/100x100/?random=2&nature,water",*/}
            {/*            id: 2*/}
            {/*        },*/}
            {/*        {*/}
            {/*            filename: 'image.jpg',*/}
            {/*            url: "https://source.unsplash.com/100x100/?random=3&nature,water",*/}
            {/*            id: 3*/}
            {/*        }*/}
            {/*    ]}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"*/}
            {/*    isTyping={true}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"*/}
            {/*    date={new Date()}*/}
            {/*    isMe={true}*/}
            {/*    isRead={true}*/}
            {/*    attachments={[*/}
            {/*        {*/}
            {/*            filename: 'image.jpg',*/}
            {/*            url: "https://source.unsplash.com/100x100/?random=1&nature,water",*/}
            {/*            id: 1*/}
            {/*        }*/}
            {/*    ]}*/}
            {/*/>*/}
        </div>
    );
};

export default Home;
