import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class UserHeader extends Component {
    render() {
        return (
            <header className='header'>
                <div className="header-block">
                    <Link to='/' className="person-page__back"></Link>
                    <div className="person-page__name">
                        Jackie Morissette
                    </div>
                </div>
            </header>
        )
    }
}

