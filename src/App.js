import React, {useState} from 'react';
import {Router, Route, Link} from 'react-router-dom';

import './App.css';
import {ColorPicker} from "./components/ColorPicker";


function App() {

  const [currValue, setCurrValue] = useState({red: 0, green: 0, blue: 0});
  const [submitValue, setSubmitValue] = useState({red: 0, green: 0, blue: 0});
  const [showSlidersBlock, setShowSliderBlock] = useState(false);

 
  let showSlider = () =>{
    
    setShowSliderBlock(showSlidersBlock => !showSlidersBlock);
    document.getElementById('range').hidden = showSlidersBlock;
    document.getElementById('input').innerHTML = showSlidersBlock ? 'open': 'close';
  };


 function handlehange(e) {
   const val = e.target.value;
   setCurrValue(
     {
       ...currValue,
       [e.target.name]: val
     }
   )
  };

 let applyColor = () => {
   setSubmitValue({...currValue})
 };

 let cancelChange = () => {
   setCurrValue({...submitValue});
   showSlider();
 };


  return (
    <>
    <div id="toMain-btn">
      <Link to="/">Main</Link>
    </div>
    <div className="App">
      <ColorPicker value = {currValue} onSlidersBlockToggle= {showSlider} onChange={handlehange} onSubmit={applyColor} onCancel={cancelChange}/>
    </div>
    </>
  );
}

export default App;
