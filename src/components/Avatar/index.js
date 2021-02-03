import React from 'react';

import {generateAvatar} from "../../utils/helpers";
import "./Avatar.scss";
const Avatar = ({user}) => {
    if (!user.avatar){
        const {color, colorLighten} = generateAvatar(user._id);
        const firstNameChar = user.username.charAt(0);
        return (
            <div style={{background: `linear-gradient(150deg, ${color} -10%, ${colorLighten} 96.52%`}} className="avatar--empty">
                {firstNameChar}
            </div>
        )
    }else{
        return <img src={user.avatar} alt="avatar"/>
    }
};

export default Avatar;
