import React, { Component } from 'react';

const context = React.createContext();

export class Provider extends Component {
  state = {
    totalBalance: 1000,
    transactions: [
      {
        id: 1,
        mode: 'income',
        name: 'Cash',
        amount: 300,
      },
      {
        id: 2,
        mode: 'expense',
        name: 'Dairy Milk',
        amount: -40,
      },
    ],
    dispatch: (action) => {
      this.reducer(action);
    },
  };
  reducer = (action) => {
    var { transactions , totalBalance } = this.state;
    transactions.push(action);
    totalBalance+=action.amount;
    this.setState({totalBalance})
    this.setState({ transactions });
  };
  render() {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const Consumer = context.Consumer;
