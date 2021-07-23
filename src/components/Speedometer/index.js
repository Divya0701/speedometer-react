import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  acc = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  break = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="img"
          className="image"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttonContainer">
          <button type="button" className="button bl" onClick={this.break}>
            Accelerate
          </button>
          <button type="button" className="button" onClick={this.acc}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
