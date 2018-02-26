import React, {Component} from 'react';

class ResumeBlock extends Component {
    render() {
        return (
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                    <h3 className="mb-0">{this.props.item.title}</h3>
                    <div className="subheading mb-3">{this.props.item.local}</div>
                    {this.props.item.description && <p>{this.props.item.description}</p>}
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">{this.props.item.period}</span>
                </div>
            </div>
        );
    }
}
export default ResumeBlock;