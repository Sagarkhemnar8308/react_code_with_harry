import React, { useState } from 'react'
export default function Textform(prop) {
    const [text, setText] = useState("Enter Text Here");


    const handleUpperCase = () => {
        const newText = text.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        setText(newText);
    };

    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = (event) => {
   var text=document.getElementById('exampleFormControlTextarea1');
   text.select();
   navigator.clipboard.writeText(text.value);
    }
    return (
        <>
            <div className='container-fluid'>
                <label>{prop.title}</label>
                <textarea className="form-control" form='' value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="3"></textarea>

                <button className='btn btn-danger m-1' onClick={handleUpperCase}>Convert to Upper Case</button>
                <button className='btn btn-danger m-1' onClick={handleCopy}>Copy text</button>

            </div>
            <div>
                <h6>there are {text.split(' ').length} words and {text.length} characters</h6>
                <h6>there are {0.008 * text.split(' ').length} take a time to read</h6>
            </div>
        </>
    )
}
