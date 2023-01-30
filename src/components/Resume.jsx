import React from 'react';
import ResumeEtyene from '../assets/ResumeEtyene.pdf';

function Resume() {

    return (
    <div className="resumeContainer">
        <object data={ResumeEtyene} 
        type="application/pdf">
        </object>
    </div>
    );
}

export default Resume

