import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class Number extends Component {
    render() {
        return (
            <div>
                <h1>This is the Number Component</h1>
                <div className="row col-sm-offset-5">
                    <p>0</p>
                </div>
                <div className="row col-sm-offset-5">
                    <Button bsStyle="primary" />
                </div>
            </div>
        )
    }
}


export default Number