import React, { useState } from 'react';

export default function About() {

    
    const [mystyle, setmystyle] = useState({
        color: 'white',
        backgroundColor:'#262625'
    })
    const [btn, setBtn] = useState('enable dark mode')

    const toggleClick=()=>{
        if(mystyle.color === '#262625')
        {
            setmystyle({
                color:'white',
                backgroundColor:'#262625',
                border:'1px solid white'
            })
            setBtn('enable light mode')
        }
        else{
            setmystyle({
                color:'#262625',
                backgroundColor:'white',
            })
            setBtn('enable dark mode')
        }
    }

    return (
        <div className="container" style={mystyle}>
        <h2 className="my-4">About us</h2>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
            <h2 class="accordion-header">
                <button
                class="accordion-button"
                type="button" style={mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                >
                Accordion Item #1
                </button>
            </h2>
            <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
            >
                <div class="accordion-body" style={mystyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div class="accordion-item" style={mystyle}>
            <h2 class="accordion-header">
                <button
                class="accordion-button collapsed" style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                >
                Accordion Item #2
                </button>
            </h2>
            <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
            >
                <div class="accordion-body" style={mystyle} >
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div class="accordion-item" >
            <h2 class="accordion-header">
                <button
                class="accordion-button collapsed"
                type="button" style={mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                >
                Accordion Item #3
                </button>
            </h2>
            <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
            >
                <div class="accordion-body" style={mystyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary" onClick={toggleClick}>
            {btn}
        </button>
        </div>
    );
}
