import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import './CoinList.css';

class CoinList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            cryptos: [],
            symbol: 'BTC',

        }

        this.updateData = this.updateData.bind(this);
    }
    

    componentDidMount() {
        this.updateData();
    }

    updateData() {
        fetch(`https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=${this.state.symbol}&tsym=GBP`, {
            method: "GET",    
            mode: "cors"
        })
        .then(res => res.json())
        .then(json => {
                const cryptos = json.Data.Exchanges;
                console.log(cryptos);
                this.setState({cryptos: cryptos});
            })
    }



    render() { 

          
        return ( 
            <div>
                <h3>Coin Listing</h3>
                <hr />
                <div className="container">
                {Object.keys(this.state.cryptos).map((key) => (
                    <div className="exchange-card item">
                        <p> {this.state.cryptos[key]['MARKET']}</p>
                          <hr />
                        <small>current price:</small><span style={{fontSize: 1.3+'em', fontWeight: 'bold', padding: 10}}> £{this.state.cryptos[key]['PRICE']}</span>
                        <p style={{color: 'grey', padding: 10}}> {this.state.cryptos[key]['FROMSYMBOL']} / {this.state.cryptos[key]['TOSYMBOL']}</p>
                    </div>
                ))}

        </div>

            </div>
         )
    }
}
 
export default CoinList;