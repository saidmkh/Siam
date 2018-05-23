import React, {Component} from 'react';

export default class PanelList extends Component {
    render() {
        return (
            <div className="panel-block">
                <ul className="nav__block">
                    <li className="nav-item__block ">
                        <div className="person__ico person__farm--ico"></div>
                        <div className="person-field">Add new farm</div>
                        <div className="person-next"></div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__login--ico"></div>
                        <div className="person-field">Jackie Add new FT</div>
                        <div className="person-next"></div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__group--ico"></div>
                        <div className="person-field">Add new Curing Station</div>
                        <div className="person-next"></div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__export--ico"></div>
                        <div className="person-field">Export all data</div>
                        <div className="person-next"></div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__name--ico"></div>
                        <div className="person-field">Account details</div>
                        <div className="person-next"></div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__block--ico"></div>
                        <div className="person-field">Change my password</div>
                        <div className="person-next"></div>
                    </li>
                    <li className="nav-item__block">
                        <div className="person__ico person__logout--ico"></div>
                        <div className="person-field">Logout</div>
                        <div className="person-next"></div>
                    </li>
                </ul>
            </div>
        )
    }
}
