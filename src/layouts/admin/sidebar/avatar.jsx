import React from 'react';

const Avatar = ({name , imagePath}) => {
    return (
        <div className="pt-1 pb-3 d-flex flex-column avatar_li position-relative mb-2 sidebar_item">
            <span className="avatar_box">
                <img className="w-100 h-100 rounded-circle" src={imagePath} alt=''/>
            </span>
            <div className="sidebar_avatar_name text-center hiddenable">{name}</div>
        </div>
    );
}

export default Avatar;
