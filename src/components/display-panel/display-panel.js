import React from 'react';

const DisplayPanel = (props) => {
    return (
        <div className="current-timer">
            {props.displayTimer}
        </div>
    )
};

export default DisplayPanel