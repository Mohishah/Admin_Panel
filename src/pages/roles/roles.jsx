import React from 'react';
import RolesTable from './rolesTable';
import AddRoles from './addRoles';

const Roles = () => {
    return (
        <div id="manage_role_section" className="manage_role_section main_section mt-4">
            <h4 className="text-center my-3 text-light">مدیریت نقش ها</h4>
            <RolesTable/>
        </div>
    );
}

export default Roles;
