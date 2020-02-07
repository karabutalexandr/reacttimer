import React from 'react';
import ReactDOM from 'react-dom';

import formatDuration from 'format-duration';
import ControlPanel from './components/control-panel/control-panel';
import DisplayPanel from './components/display-panel/display-panel';
import SetBox from './components/set-box/set-box';


class App extends React.Component {

    textInput = React.createRef();
    
    state = {
        timerStarted: false,
        timerStopped: true,
        seconds: 0
    }

    handleTimerStart = (e) => {
        if(this.state.timerStopped) {
            this.timer = setInterval(() => {
                this.setState({timerStarted: true, timerStopped: false});
                if(this.state.timerStarted && this.state.seconds > 0) {
                    this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
                }
                if(this.state.seconds <= 0) {
                    this.handleTimerReset()
                }
            }, 1000);
        }
    }

    handleTimerStop = () => {
        this.setState({timerStarted: false, timerStopped: true});
        clearInterval(this.timer);
    }

    handleTimerReset = () => {
        this.setState({
            timerStarted: false,
            timerStopped: true,
            seconds: 0,
        });
        clearInterval(this.timer);
    }

    handleTimerSet = () => {
        this.setState({
            seconds: this.textInput.current.value
        })
        this.textInput.current.value = '';
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">React Based Timer</h2>
                <div className="timer-container">
                    <SetBox 
                        setCallback={this.handleTimerSet} 
                        textInputRef={this.textInput} />
                   
                    <DisplayPanel 
                        displayTimer={formatDuration( 1000 * this.state.seconds )} />
                    
                    <ControlPanel 
                        startCallback={this.handleTimerStart} 
                        stopCallback={this.handleTimerStop} 
                        resetCallback={this.handleTimerReset} />
                </div>
            </div>
        );
    }
}




ReactDOM.render(<App />, document.getElementById('root'))


