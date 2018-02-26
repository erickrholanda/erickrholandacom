import React, {Component} from 'react';
import ResumeBlock from './blocks/ResumeBlock'

class Experiences extends Component {
    render() {
       return (
           <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div className="my-auto">
                <h2 className="mb-5">Experiências</h2>
                    {this.props.experiences.map((experience, index) => {
                    return <ResumeBlock item={experience} key={index} />
                    })}
                </div>
            </section>
       );
    }
}
export default Experiences;