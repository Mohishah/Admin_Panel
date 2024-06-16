import React from 'react';
import PermissionsTable from './permissionsTable';

const Permissions = () => {
    return (
        <div id="manage_permission_section" className="manage_permission_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت مجوز ها</h4>
            <PermissionsTable/>
        </div>
    );
}

export default Permissions;
