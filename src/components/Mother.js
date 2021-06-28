import React from 'react';
import Daugther from './Daugther';

class Mother extends React.Component {

  render() {

    return (
      <div>
        <h2>
          Hello i'm Mother
        </h2>
        <Daugther money={this.props.money} spendMoney={this.props.spendMoney} />
      </div >
    )
  }
}

export default Mother;