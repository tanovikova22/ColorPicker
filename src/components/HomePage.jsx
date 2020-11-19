import React from 'react';
import {Link} from 'react-router-dom';

export const HomePage = () => {

    return(
        <div id="nav">
            <h1>You are welcome to change colors!</h1>
            <Link to="/picker">Picker</Link>
        </div>
    )
};