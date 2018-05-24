import React, {Component} from 'react';

import UserList from "./user_list/user_list";
import BottomMenu from "./bottom_menu/bottom_menu";
import MainHeader from "./main_header/main_header";


export default class Base extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <MainHeader/>
                <div className="main">
                    <UserList />
                    <BottomMenu/>
                </div>
            </div>
        )
    }
}




