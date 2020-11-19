import React from 'react';

import {Range} from './Range';

export const ColorPicker = ({value, onChange, onSubmit, onCancel, onSlidersBlockToggle }) => {

    

    let colorBlockStyle = {
        background: `rgb(${value.red}, ${value.green}, ${value.blue})`
    }

    
    return(
        <div>
            <div id="rect" style={colorBlockStyle}></div>
            <button id="input" onClick = {onSlidersBlockToggle}>open</button>
            <div id="range" hidden={true}>
            <Range name="red" value = {value.red} onChange= {onChange}/> 
            <Range name="green" value = {value.green} onChange={onChange}/>
            <Range name="blue" value = {value.blue} onChange={onChange}/>
              <button className="submit-btn"onClick={onSubmit}>Submit</button>
              <button className="cancel-btn" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )
}