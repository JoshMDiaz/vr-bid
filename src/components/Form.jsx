import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sqFt: '',
      miles: ''
    }
  }

  calculate = () => {
    this.props.update(this.state);
  }

  reset = () => {
    this.setState({ sqFt: '', miles: '' }, () => this.props.update(this.state));
  }

  handleChange = (e, i) => {
    if (i === 'sqFt') {
      this.setState({ sqFt: e.target.value });
    } else {
      this.setState({ miles: e.target.value });
    }
  }

  render() { 
    return (
      <div className="form-container">
        <div className="form-element">
          <label>Sq Ft</label>
          <input type="number" value={this.state.sqFt} onChange={(e) => this.handleChange(e, `sqFt`)} />
        </div>
        <div className="form-element">
          <label>Miles</label>
          <input type="number" value={this.state.miles} onChange={(e) => this.handleChange(e, `miles`)} />
        </div>
        <button onClick={this.calculate} className="primary">Calculate</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
 
export default Form;