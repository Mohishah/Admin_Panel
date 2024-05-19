import React from 'react';

const ShowInMenu = ({rowData}) => {
    return (
        <span className={rowData.show_In_Menu ? "text-success" : "text-danger"}>
          {rowData.show_In_Menu ? "هست" : "نیست"}</span>
    );
}

export default ShowInMenu;
