import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class MainHeader extends Component {
    render() {
        return (
            <header className='header'>
                <div className="header-block">
                    <div className="static-header__name col-xl-2 col-md-4 col-6">
                        Simon curator
                    </div>
                    <Link to='/panel' className="header-menu__link pos-rigth"></Link>
                </div>
            </header>
        )
    }
}


