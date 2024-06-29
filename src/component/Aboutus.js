import React, { useState } from 'react';

export const Aboutus = () => {
    const [myStyle, setmyStyle] = useState(
        {
            color: 'white',
            backgroundColor: 'black'
        }
    );

    const [btnText, setbtnText] = useState('Enable dark mode')

    const toggleEvent = () => {
        if (myStyle.color === 'white') {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText('Enable Dark Mode');
        } else {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtnText('Enable light Mode');
        }
    }

    return (
        <div className='my-3'>
            <div className="accordion m-2" id="accordionExample" >
                <div className="card">
                    <div className="card-header" id="headingOne" style={myStyle} >
                        <h2 className="mb-0">
                            <button className="btn btn-block text-left" style={myStyle} c type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" style={myStyle} className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" style={myStyle} id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Collapsible Group Item #2
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" style={myStyle} aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            Some placeholder content for the second accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree" style={myStyle} >
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Collapsible Group Item #3
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" style={myStyle} aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={
                    toggleEvent
                } style={myStyle}>{btnText}</button>
            </div>

        </div>
    )
}
