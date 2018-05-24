import React, {Component} from 'react';

import PanelList from './panel_list/panel_list';
import PanelHeader from './panel_header/panel_header';

export default class Panel extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <PanelHeader/>
                <div className="main">
                   <PanelList/>
                </div>
            </div>
        )
    }
}




