import React from 'react';

import Button from '../button/button'

const ControlPanel = props => {
    return (
        <div className="timer-controls">
            <Button btnName='Start Timer' callback={props.startCallback} />
            <Button btnName='Stop Timer' callback={props.stopCallback}/>
            <Button btnName='Reset Timer' callback={props.resetCallback}/>
        </div>
    )
};

export default ControlPanel;
