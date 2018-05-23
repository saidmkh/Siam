import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import UserList from '../user_list/user_list';
import BottomMenu from '../bottom_menu/bottom_menu';

class Main extends Component {
    render () {
        return (
            <div className="wrapper">
                <Header />
                <div className="main">
                    <UserList/>
                    <BottomMenu/>
                </div>
            </div>
        )
    }
}

export default Main;