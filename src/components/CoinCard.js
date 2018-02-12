import React, { Component } from 'react';
import './CoinCard.css';
import fetch from 'isomorphic-fetch';

class CoinCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      symbol: props.symbol,
      price: null,
      lastPrice: null,
    }

    this.pollPrice = this.pollPrice.bind(this)
  }

  componentDidMount() {
    this.pollPrice()
    setInterval(this.pollPrice, 2000)
  }

  pollPrice() {
    console.log('Searching for updated price...')
    const { symbol } = this.state
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=${symbol},GBP`)
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
        this.setState((prevState) => ({
          price: json.GBP,
          lastPrice: prevState.price !== json.GBP
            ? prevState.price
            : prevState.lastPrice
        }))
      })
  }

  priceChange(lastPrice, price) {
    /*const { lastPrice, price } = this.state*/
    const diff = lastPrice - price
    const change = diff / lastPrice
    return (change * 100).toFixed(2)

  }

  render() {
    const { name, symbol, price, lastPrice } = this.state
    const gainloss = lastPrice > price
    ? 'loss'
    : 'gain'
    return (
      <div className={`card ${gainloss}`}>

        <div className='name'>
          {name}
          <span>({symbol})</span>
        </div>

        <div className={`percentage ${gainloss}`}>
          {this.priceChange(lastPrice, price)}%
        </div>

        <div className='logo'>

        </div>

        <div className={`price ${gainloss}`}>
          £{price}
        </div>
      </div>
    );
  }
}

export default CoinCard;
