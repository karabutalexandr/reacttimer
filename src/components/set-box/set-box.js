import React from 'react';

import Button from '../button/button'

import './set-box.css'

const SetBox = (props) => {

    return (
        <div className='set-input'>
            <label htmlFor="setTimeInput">Enter time in seconds: </label>
            <input id="setTimeInput" placeholder="Enter time in seconds" ref={props.textInputRef}/>
            <Button btnName='Set Timer' callback={props.setCallback}/>
        </div>
    )
} 


export default SetBox