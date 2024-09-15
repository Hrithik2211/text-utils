import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
/* import { BrowserRouter, Route, Routes } from "react-router-dom";*/

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    // for auto dismissing alert message
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(Mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#23272F';
      showAlert("Dark mode has been enabled","success");
      document.title='Text-utils-dark mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#E8EAEC';
      showAlert("Light mode has been enabled","success");
      document.title='Text-utils-light mode'

    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route */}
              {/* exact path="/" */}
              {/* element={ */}
      <Navbar title="Text-Utils" about = "about Text-utils"  mode = {Mode} toggleMode ={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
                <FormText
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={Mode}/>
      </div>
      {/* } */}
{/* //     ></Route> */}
{/* // </Routes> */}
{/* /</BrowserRouter> */}
    </>
  );
}

export default App;
