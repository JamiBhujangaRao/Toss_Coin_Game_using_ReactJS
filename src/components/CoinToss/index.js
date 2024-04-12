import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {result: 0, heads: 0, tails: 0}

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    const {heads, tails} = this.state
    let headCount = heads
    let tailCount = tails

    if (tossResult === 0) {
      headCount += 1
    } else {
      tailCount += 1
    }

    this.setState({result: tossResult, heads: headCount, tails: tailCount})
  }

  tossImage = () => {
    const {result} = this.state
    const imageUrl = result === 0 ? headImage : tailImage

    return <img alt="toss result" className="toss-image" src={imageUrl} />
  }

  render() {
    const {heads, tails} = this.state
    return (
      <div className="app-contianer">
        <div className="coin-card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="about">Heads (or) Tails</p>
          {this.tossImage()}
          <button className="tossBtn" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="results">Total: {heads + tails}</p>
            <p className="results">Heads: {heads}</p>
            <p className="results">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
