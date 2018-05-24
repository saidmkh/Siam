import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/App.css';

import Main from './components/main/main';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Main} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
