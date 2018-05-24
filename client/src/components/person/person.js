import React, {Component} from 'react';

import UserInfo from './user_info/user_info'
import EditButtons from './edit-buttons/edit_button';
import UserHeader from './user_header/user_header';

export default class Person extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <UserHeader/>
                <div className="main">
                    <UserInfo/>
                    <EditButtons/>
                </div>
            </div>
        )
    }
}





