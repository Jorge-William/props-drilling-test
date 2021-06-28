import React from 'react';
import Mother from './Mother';

class Grandmother extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      money: 1000000000,
    }

    this.spendMoney = this.spendMoney.bind(this);
  }

  spendMoney = () =>
    this.setState((prevState) => ({
      money: prevState.money - 100,
    }));


  render() {

    return (
      <div>
        <h1>
          Hello i'm Grandmother
        </h1>
        <Mother money={this.state.money} spendMoney={this.spendMoney} />
      </div>
    )
  }
}
export default Grandmother;