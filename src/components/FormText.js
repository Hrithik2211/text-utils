import React, { useState } from 'react';
export default function FormText(props) {
  const handleClick = () => {
    console.log('you have clicked button');
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to upper case","primary");
  };
  const handleOnChange = (event) => {
    console.log('Onchange');
    setText(event.target.value);
  };
  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case","primary")
  };
  // this is the basic function to use states
  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{color:props.mode === 'dark' ?'white':'black'}}>
        <h1 className='my-4' >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode === 'dark' ?'#23272F':'#E8EAEC',color:props.mode ==='dark' ? 'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick} style={{backgroundColor:props.mode === 'dark' ?'#149ECA':'#1182fa'}}>
          Convert into upperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} style={{backgroundColor:props.mode === 'dark' ?'#149ECA':'#1182fa'}}>
          Convert into lowerCase
        </button>

      </div>
      <div className="container" style={{color:props.mode === 'dark' ?'white':'black'}}>
        <h2 className='my-2'>Your text Summary is :</h2>
        <p>
          {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim().length} characters
        </p>
      </div>
      <div className="container" style={{color:props.mode === 'dark' ?'white':'black'}}>
        <h2 className='my-2'>Preview:</h2>
        <p>
            {text}
        </p>
      </div>
    </>
  );
}
