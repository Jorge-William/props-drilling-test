import React from 'react';
import Mother from './Mother';
import MyContext from './MyContext';
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
    const contextValue = {
      money: this.state.money,
      spendMoney: this.spendMoney
    }
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <h1>
            Hello i'm Grandmother
          </h1>
          <Mother />
        </div>
      </MyContext.Provider>
    )
  }
}
export default Grandmother;