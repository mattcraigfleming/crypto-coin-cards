import React, { Component } from 'react';
import CoinCard from './components/CoinCard';
import CoinList from './components/CoinList';
import Tweets from './components/Tweets';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <br />

      <h2>Live</h2>
      <hr />
      <div className="container">
      <CoinCard
          className="item" 
          name="Bitcoin"
          symbol="BTC"
        />
        <CoinCard 
          className="item" 
          name="Ethereum"
          symbol="ETH"
        />
        <CoinCard 
          className="item" 
          name="Litecoin"
          symbol="LTC"
        />
        <CoinCard 
          className="item" 
          name="Ripple"
          symbol="XRP"
        />
        <CoinCard 
          className="item" 
          name="TRON"
          symbol="TRX"
        />
         <CoinCard
          className="item"  
          name="Verge"
          symbol="XVG"
        />

      </div>

      <div>
        <h2>Exchanges</h2>
        <hr />
        <CoinList />
      </div>
      <h2>Social</h2>
      <hr />
      <div>
        
        <Tweets />
      </div>

      </div>
    );
  }
}

export default App;
