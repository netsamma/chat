import React, { Component } from 'react'

export class ClockClass extends Component {
	state = {
        time: new Date().toLocaleTimeString(navigator.language, {
            hour12: true
        })
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString(navigator.language, {
                    hour12: true
                })
            })
        }, 1000);
    }


    render() {
        const timeArr = this.state.time.split(':');
        return (
            <div className="clock">
                <div className="time">
                    {`${timeArr[0]} : ${timeArr[1]} `}<span className="sec">{timeArr[2]}</span>
                </div>
            </div>
        );
    };

}

export default ClockClass

// https://codepen.io/Thtsuman/pen/LoRZZK?editors=0010