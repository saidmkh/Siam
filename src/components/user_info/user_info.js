import React, {Component} from 'react';

export default class UserInfo extends Component {
    render() {
        return (
            <div className="person-block">
                <ul className="nav__block">
                    <li className="nav-item__block ">
                        <div className="person__ico person__login--ico"></div>
                        <div className="person-field">Kian_Johnston10</div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__name--ico"></div>
                        <div className="person-field">Jackie Morissette</div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__number--ico"></div>
                        <div className="person-field">658.742.2714 x818</div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__email--ico"></div>
                        <div className="person-field">Loraine42@yahoo.com</div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__geo--ico"></div>
                        <div className="person-field">Falkland Island (Malvinas), Katharinaland, 9517 Darby Island</div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__hash--ico"></div>
                        <div className="person-field">rJUZB4sLXKe</div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__tasks--ico"></div>
                        <div className="person-field">51</div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__group--ico"></div>
                        <div className="person-field">Simon Curator</div>
                    </li>
                </ul>

            </div>
        )
    }
}

