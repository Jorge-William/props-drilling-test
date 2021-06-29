import React from 'react';
import MyContext from './MyContext';
class Granddaugther extends React.Component {

  render() {
    return (
      <div>
        <h4>
          Hello i'm Granddaugther
        </h4>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <p>{value.money}</p>
                <button onClick={value.spendMoney}>Spend money</button>
              </div>
            )
          }
        </MyContext.Consumer>
        {/* <p>{`I have been received ${this.props.money} to spend.`}</p>
        <button onClick={this.props.spendMoney}>Spend Money!!!</button> */}
      </div >
    )
  }
}

export default Granddaugther;