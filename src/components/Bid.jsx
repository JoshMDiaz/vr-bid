import React, { Component } from 'react'
import Form from './Form';
import NumberFormat from 'react-number-format'

class Bid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bid: 0
    }
  }

  calculateSqFt = (sqFt) => {
    if (sqFt === '') {
      sqFt = 0;
    }
    return sqFt * this.props.sqFtValue;
  }

  calculateMiles = (miles) => {
    if (miles === '') {
      miles = 0;
    }
    return miles * this.props.milesValue;
  }

  update = (s) => {
    let sqFt = this.calculateSqFt(s.sqFt),
        miles = this.calculateMiles(s.miles);
        console.log(sqFt, miles);
        
    this.setState({ bid: (sqFt + miles) });
  }

  render() { 
    return (
      <div className="bid">
        <Form update={this.update} />
        <h2>My Bid</h2>
        <h3>
          <NumberFormat value={this.state.bid} prefix="$" decimalScale={2} fixedDecimalScale={true}  thousandSeparator={true} displayType="text" />
        </h3>
        <h2>Sub Bid</h2>
        <h3>
          <NumberFormat value={this.state.bid / 6} prefix="$" decimalScale={2} fixedDecimalScale={true}  thousandSeparator={true} displayType="text" />
        </h3>
      </div>
    );
  }
}
 
export default Bid;