import React from 'react';
import Granddaugther from './Granddaugther';

class Daugther extends React.Component {
  render() {

    return (
      <div>
        <h3>
          Hello i'm Daugther
        </h3>
        <Granddaugther money={this.props.money} spendMoney={this.props.spendMoney} />
      </div >
    )
  }
}

export default Daugther;