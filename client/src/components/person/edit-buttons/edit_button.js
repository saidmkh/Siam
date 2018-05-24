import React, {Component} from 'react';

export default class EditButtons extends Component {
    render() {
        return (
            <div className="edit-person-block d-flex justify-content-around col-12">
                <button className="edit-btn">Edit</button>
                <button className="edit-btn">Save</button>
            </div>
        )
    }
}

