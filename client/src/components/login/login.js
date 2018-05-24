import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="login-block d-flex flex-column justify-content-center align-content-center">
                    <form className="login-form col-xl-3 col-lg-4 col-md-6 col-sm-7 col-xs-8 col-10">
                        <div className="login__title">Login</div>
                        <div className="form--item">
                            <label className="login-form--label"></label>
                            <input type="text" className="login-form--input" placeholder="Enter username"/>
                        </div>
                        <div className="form--item">
                            <label className="login-form--label"></label>
                            <input type="password" className="login-form--input" placeholder="Enter password"/>
                        </div>
                        <div className="login-btn__block">
                            <button type="submit" className="login-btn"></button>
                        </div>
                        <div className="login-forgotten">
                    <Link to='/' className="login-forgotten--text">
                        Forgotten accsess details?
                    </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


