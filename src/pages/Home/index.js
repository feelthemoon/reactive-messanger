import React from 'react';
import {Message} from "../../components";

const Home = () => {
    return (
        <div className="home-page">
            <Message
                avatar="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
                text="We"
                date={new Date()}
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
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                        id: 1
                    }
                ]}
            />
        </div>
    );
};

export default Home;
