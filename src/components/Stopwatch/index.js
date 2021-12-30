import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutesTime: 0,
    secondsTime: 0,
  }

  addTimeValue = () => {
    const {minutesTime, secondsTime} = this.state
    let minutesValue = '0'
    let secondsValue = '0'
    if (minutesTime.toString().length === 1) {
      console.log('string')
      minutesValue = minutesValue.concat(`${minutesTime}`)
    } else {
      console.log('not string sec')
      minutesValue = minutesValue.concat(`${minutesTime}`)
      minutesValue = minutesValue.substring(1)
    }
    if (secondsTime.toString().length === 1) {
      console.log('seconds string')
      secondsValue = secondsValue.concat(`${secondsTime}`)
    } else {
      console.log('not string sec')
      secondsValue = secondsValue.concat(`${secondsTime}`)
      secondsValue = secondsValue.substring(1)
    }
    const resultTimeText = minutesValue.concat(':', secondsValue)
    return resultTimeText
  }

  startTimmer = () => {
    this.Timmer = setInterval(this.timmerStarting, 1000)
  }

  timmerStarting = () => {
    const {minutesTime, secondsTime} = this.state
    if (secondsTime === 59) {
      this.setState(prevState => ({
        minutesTime: prevState.minutesTime + 1,
        secondsTime: 0,
      }))
    } else {
      this.setState(prevState => ({
        secondsTime: prevState.secondsTime + 1,
      }))
    }
  }

  StopTimmer = () => {
    clearInterval(this.Timmer)
  }

  resetTimmer = () => {
    this.setState({
      minutesTime: 0,
      secondsTime: 0,
    })
    clearInterval(this.Timmer)
  }

  render() {
    return (
      <div className="Mainpage">
        <div className="ContainerStopwatch">
          <h1>StopWatch</h1>
          <div className="stopwatchDetails">
            <div className="imgHeadingContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timmer</p>
            </div>
            <h1 className="TimmerDetails">{this.addTimeValue()}</h1>
            <div className="ButtonContainer">
              <button
                className="start"
                type="submit"
                onClick={this.startTimmer}
              >
                Start
              </button>
              <button className="stop" type="submit" onClick={this.StopTimmer}>
                Stop
              </button>
              <button
                className="Reset"
                type="submit"
                onClick={this.resetTimmer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
