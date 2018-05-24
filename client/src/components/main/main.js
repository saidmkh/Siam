import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from "../login/login";
import Panel from "../panel/panel";
import Base from "../base/base";
import Person from "../person/person";


class Main extends Component {
    render () {
        return (
            <div className="wrapper">
                <Switch>
                    <Route exact path='/' component={Base} />
                    <Route path='/panel/' component={Panel} />
                    <Route path='/personal/' component={Person} />
                </Switch>
                <Route path='/login/' component={Login} />
            </div>
        )
    }
}

export default Main;