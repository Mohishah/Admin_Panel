import React from 'react';
import ColorsTable from './colorsTable';

const Colors = () => {
    return (
        <div id="manage_color_section" className="add_color_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت رنگ ها</h4>
            <ColorsTable/>
        </div>
    );
}

export default Colors;
