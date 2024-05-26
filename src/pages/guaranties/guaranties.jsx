import React from 'react';
import GuarantiesTable from './guarantiesTable';

const Guaranties = () => {
    return (
        <div id="manage_guarantee_section" className="manage_guarantee_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت گارانتی ها</h4>
            <GuarantiesTable/>
        </div>
    );
}

export default Guaranties;
