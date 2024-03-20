import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  onGenerateNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: newRandomNumber})
    console.log('pk')
  }

  render() {
    const {count} = this.state
    return (
      <div className="back">
        <div className="inner-container">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button-con"
            onClick={this.onGenerateNumber}
          >
            Generate
          </button>
          <p className="randoms">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
