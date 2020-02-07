import React from 'react';

const Button = (props) => {
    return <button onClick={props.callback}>{props.btnName}</button>
};

export default Button