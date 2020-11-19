import React from 'react';




export const Range = ({value, onChange, name}) => {


    return (
        <form>
             <div>
                <input id="slider-range" type="range" name={name} value={value} onChange={onChange} min={0} max={255}/>
                <span id="number">{value}</span>
            </div>
        </form>
    )

};