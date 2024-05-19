import React from 'react';
import Switch from './Switch';
import Input from './input';
// import Radio from './Radio';
// import Date from './Date';
// import File from './File';

const AuthFormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        case 'switch':
            return <Switch {...props}/>
        // case 'date':
        //     return <Date {...props}/>
        // case 'file':
        //     return <File {...props}/>
        default:
            return null
    }
}

export default AuthFormikControl;