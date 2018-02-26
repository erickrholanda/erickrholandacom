import React, {Component} from 'react';
import ResumeBlock from './blocks/ResumeBlock'

class Education extends Component {
    render() {
       return (
           <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                <h2 className="mb-5">Educação</h2>
                    {this.props.education.map((item, index) => {
                    return <ResumeBlock item={item} key={index} />
                    })}
                </div>
            </section>
       );
    }
}
export default Education;