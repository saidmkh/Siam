import React, {Component} from 'react';

import UserItem from "./user_item";

export default class UserList extends Component {
    render() {
        return (
            <div className="users-list col-12">
                <ul className="nav__block">
                    <UserItem/>
                    <UserItem/>
                </ul>
            </div>
        )
    }
}

