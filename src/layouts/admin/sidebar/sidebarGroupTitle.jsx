import React from 'react';

const SidebarGroupTitle = ({title}) => {
    return (
        <div className="py-1 mt-1 text-start d-flex justify-content-center no_pointer no_hover sidebar_item ">
            <span className="hiddenable no_wrap group_sidebar_title">{title}</span>
        </div>
    );
}

export default SidebarGroupTitle;
