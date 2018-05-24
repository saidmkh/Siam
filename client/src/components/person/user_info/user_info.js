import React, {Component} from 'react';

export default class UserInfo extends Component {
    render() {
        return (
            <div className="person-block">
                <ul className="nav__block">
                    <li className="nav-item__block ">
                        <div className="person__ico person__login--ico"></div>
                        <input type='text' className="person-field" readonly="readonly" value='Kian_Johnston10' />
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__name--ico"></div>
                        <input type='text' className="person-field" readonly="readonly" value='Jackie Morissette' />
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__number--ico"></div>
                        <input type='text' className="person-field" readonly="readonly" value='658.742.2714 x818' />
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__email--ico"></div>
                        <input type='text' className="person-field" readonly="readonly" value='Loraine42@yahoo.com' />
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__geo--ico"></div>
                        <input type='textarea' className="person-field" readonly="readonly" value='Falkland Island (Malvinas), Katharinaland, 9517 Darby Island' />
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__hash--ico"></div>
                        <input type='text' className="person-field" readonly="readonly" value='rJUZB4sLXKe' />
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__tasks--ico"></div>
                        <input type='text' className="person-field" readonly="readonly" value='51' />
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__group--ico"></div>
                        <input type='text' className="person-field" readonly="readonly" value='Simon Curator' />
                    </li>
                </ul>
            </div>
        )
    }
}

