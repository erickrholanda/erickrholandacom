import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                    <h1 className="mb-0">{this.props.profile.firstname}
                        <span className="text-primary">{this.props.profile.lastname}</span>
                    </h1>
                    <div className="subheading mb-5">
                    {this.props.profile.address} {this.props.profile.phone && `· ` + this.props.profile.phone} · <a href={`mailto:` + this.props.profile.email}>{this.props.profile.email}</a>
                    </div>
                    <p className="mb-5">{this.props.profile.description}</p>
                    <ul className="list-inline list-social-icons mb-0">
                        <li className="list-inline-item">
                            <a href={this.props.profile.facebookUrl}>
                                <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href={this.props.profile.twitterUrl}>
                                <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href={this.props.profile.linkedinUrl}>
                                <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href={this.props.profile.github}>
                                <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default About;