import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class UserItem extends Component {
    render() {
        return (
            <li className="nav-item__block row flex-column">
                <div className="user--item d-flex flex-column col-12">
                    <Link to='/personal' className="user--item--info">
                        <span className="user--item__number">
                            #1
                        </span>
                        <span className="user--item__name">
                          Jackie Morissette
                        </span>
                    </Link>
                    <div className="load-borders d-flex">
                        <div className="border-first border-fill"></div>
                        <div className="border-second"></div>
                    </div>
                </div>
            </li>
        )
    }
}
