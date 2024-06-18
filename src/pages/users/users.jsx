import React from 'react';
import UsersTable from './usersTable';

const Users = () => {
    return (
        <div id="manage_user_section" className="manage_user_section main_section">
            <h4 className="text-center my-3 text-light">مدیریت کاربران</h4>
            <UsersTable/>
        </div>
    );
}

export default Users;
