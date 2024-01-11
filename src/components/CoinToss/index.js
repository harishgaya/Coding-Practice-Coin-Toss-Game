// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    tossResult: 0,
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => ({
      tossResult,
      heads: tossResult === 0 ? prevState.heads + 1 : prevState.heads,
      tails: tossResult === 1 ? prevState.tails + 1 : prevState.tails,
    }))
  }

  render() {
    const {heads, tails, tossResult} = this.state
    const total = heads + tails
    return (
      <div className="app-Container">
        <div className="toss-Container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-title">Heads (or) Tails</p>
          <img
            src={
              tossResult === 0
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            alt="toss result"
            className="images-Size"
          />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="toss-Result-Container">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
