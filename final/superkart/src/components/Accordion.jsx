import React, { useState } from 'react';

const Accordion = ({ questions, answers }) => {
    const [text, setText] = useState(false);
    const display = () => {
        setText(!text);
    }
    return (
        <div className='accordion'>
            <div className="questions">
                <h3>{questions}</h3>
                <p className="sign" onClick={display}>{text ? "-" : "+"}</p>
            </div>
            <div className="answers">
                {text && <p className="answer">{answers}</p>}
            </div>
        </div>
    )
}

export default Accordion;