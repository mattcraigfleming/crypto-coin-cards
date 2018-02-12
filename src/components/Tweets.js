import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';

class Tweets extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="container">

            <div className="item">

            <Timeline
                    dataSource={{
                    sourceType: 'profile',
                    screenName: 'CryptoYoda1338'
                    }}
                    options={{
                    username: 'CryptoYoda1338',
                    height: '1200',
                    width: '1200',
                    theme: 'dark'
                    }}
                    onLoad={() => console.log('Timeline is loaded!')}
                />
            </div>

            </div>
          )
    }
}
 
export default Tweets;