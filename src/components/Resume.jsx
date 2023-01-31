import React from 'react';
import ResumeEtyene from '../assets/ResumeEtyene.pdf';

function Resume() {

    return (
    <div className="resumeContainer">
        <div>
            <h2>Resume</h2>
        </div>
        <object data={ResumeEtyene} 
        type="application/pdf">
        </object>
    </div>
    );
}

export default Resume

