import React from 'react';

class Granddaugther extends React.Component {

  render() {
    return (
      <div>
        <h4>
          Hello i'm Granddaugther
        </h4>
        <p>{`I have been received ${this.props.money} to spend.`}</p>
        <button onClick={this.props.spendMoney}>Spend Money!!!</button>
      </div >
    )
  }
}

export default Granddaugther;