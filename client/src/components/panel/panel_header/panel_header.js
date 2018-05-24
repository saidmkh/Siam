import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class PanelHeader extends Component {
    render() {
        return (
            <header className='header'>
                <div className="header-block">
                    <div className="header-menu__link"></div>
                    <Link to='/' className="header-home__link pos-rigth"></Link>
                </div>
            </header>
        )
    }
}
