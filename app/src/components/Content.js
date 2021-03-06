import React, {Component} from 'react';
import resume from '../resume.json';
import About from './About';
import Experiences from './Experiences';
import Education from './Education';
import Number from './Number';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = resume;
        this.state.style = {
            opacity: '0',
            transform: 'translateY(200px)',
            transition: 'transform .6s ease-out, opacity .9s ease',
            transitionDelay: '.3s'
        };
        this.mountStyle = this.mountStyle.bind(this);
        this.unMountStyle = this.unMountStyle.bind(this);
    }
    mountStyle() {
        let style = Object.assign({}, this.state.style || {});
        style.opacity = '1' ;
        style.transform = 'translateY(0)';
        this.setState({
            style: style
        });
    }
    unMountStyle() {
        let style = Object.assign({}, this.state.style || {});
        style.opacity = '0';
        this.setState({
            style: style
        });
    }
    componentDidMount() {
        setTimeout(this.mountStyle);
    }
    render() {
        return (
            <div className="container-fluid p-0" style={this.state.style}>
                <Number />
                <About profile={this.state} />
                <Experiences experiences={this.state.experiences} />
                <Education education={this.state.education} />

                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                    <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline list-icons">
                        <li className="list-inline-item">
                        <i className="devicons devicons-html5"></i>
                        </li>
                        <li className="list-inline-item">
                        <i className="devicons devicons-css3"></i>
                        </li>
                        <li className="list-inline-item">
                        <i className="devicons devicons-javascript"></i>
                        </li>
                        <li className="list-inline-item">
                        <i className="devicons devicons-jquery"></i>
                        </li>
                        <li className="list-inline-item">
                        <i className="devicons devicons-sass"></i>
                        </li>
                        <li className="list-inline-item">
                        <i className="devicons devicons-less"></i>
                        </li>
                        <li className="list-inline-item">
                        <i className="devicons devicons-bootstrap"></i>
                        </li>
                        <li className="list-inline-item">
                        <i className="devicons devicons-wordpress"></i>
                        </li>
                        <li className="list-inline-item">
                        <i className="devicons devicons-grunt"></i>
                        </li>
                        <li className="list-inline-item">
                        <i className="devicons devicons-gulp"></i>
                        </li>
                        <li className="list-inline-item">
                        <i className="devicons devicons-npm"></i>
                        </li>
                    </ul>

                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                        <i className="fa-li fa fa-check"></i>
                        Mobile-First, Responsive Design</li>
                        <li>
                        <i className="fa-li fa fa-check"></i>
                        Cross Browser Testing &amp; Debugging</li>
                        <li>
                        <i className="fa-li fa fa-check"></i>
                        Cross Functional Teams</li>
                        <li>
                        <i className="fa-li fa fa-check"></i>
                        Agile Development &amp; Scrum</li>
                    </ul>
                    </div>
                </section>

                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
                    <div className="my-auto">
                    <h2 className="mb-5">Interests</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                    <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
                    </div>
                </section>

                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
                    <div className="my-auto">
                    <h2 className="mb-5">Awards &amp; Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                        <i className="fa-li fa fa-trophy text-warning"></i>
                        Google Analytics Certified Developer</li>
                        <li>
                        <i className="fa-li fa fa-trophy text-warning"></i>
                        Mobile Web Specialist - Google Certification</li>
                        <li>
                        <i className="fa-li fa fa-trophy text-warning"></i>
                        1<sup>st</sup>
                        Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
                        <li>
                        <i className="fa-li fa fa-trophy text-warning"></i>
                        1<sup>st</sup>
                        Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
                        <li>
                        <i className="fa-li fa fa-trophy text-warning"></i>
                        2<sup>nd</sup>
                        Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
                        <li>
                        <i className="fa-li fa fa-trophy text-warning"></i>
                        1<sup>st</sup>
                        Place - James Buchanan High School - Hackathon 2006</li>
                        <li>
                        <i className="fa-li fa fa-trophy text-warning"></i>
                        3<sup>rd</sup>
                        Place - James Buchanan High School - Hackathon 2005
                        </li>
                    </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;