// src/Calculator.js
import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    // Initialize the component's state with default values
    this.state = {
      displayValue: '0',      // The value displayed on the calculator screen
      operator: null,         // The selected operator (+, -, *, /)
      previousValue: null,    // The previous value before selecting an operator
    };
  }

  // Function to handle input of digits
  inputDigit = (digit) => {
    const { displayValue } = this.state;
    if (displayValue === '0') {
      // If the display value is '0', replace it with the input digit
      this.setState({ displayValue: digit });
    } else {
      // Otherwise, append the input digit to the current display value
      this.setState({ displayValue: displayValue + digit });
    }
  };

  // Function to handle input of decimal point
  inputDecimal = () => {
    const { displayValue } = this.state;
    if (!displayValue.includes('.')) {
      // If the display value does not already contain a decimal point, add one
      this.setState({ displayValue: displayValue + '.' });
    }
  };

  // Function to clear the calculator display and reset the state
  clearDisplay = () => {
    this.setState({
      displayValue: '0',
      operator: null,
      previousValue: null,
    });
  };

  // Function to set the selected operator
  setOperator = (operator) => {
    const { displayValue } = this.state;
    // Store the current display value as the previous value, and reset the display
    this.setState({
      operator,
      previousValue: displayValue,
      displayValue: '0',
    });
  };

  // Function to perform the calculation
  calculate = () => {
    const { displayValue, operator, previousValue } = this.state;
    const currentValue = parseFloat(displayValue);
    const prevValue = parseFloat(previousValue);

    // Perform the calculation based on the selected operator
    if (operator === '+') {
      this.setState({ displayValue: prevValue + currentValue });
    } else if (operator === '-') {
      this.setState({ displayValue: prevValue - currentValue });
    } else if (operator === '*') {
      this.setState({ displayValue: prevValue * currentValue });
    } else if (operator === '/') {
      this.setState({ displayValue: prevValue / currentValue });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.displayValue}</div>
        <div className="buttons">
            <div className="row">
                <button className= "buttonRow" onClick={this.clearDisplay}>AC</button>
                <button className= "buttonRow" onClick={() => this.setOperator('/')}>/</button>
            </div>
            <div className="row">
                <button onClick={() => this.inputDigit('7')}>7</button>
                <button onClick={() => this.inputDigit('8')}>8</button>
                <button onClick={() => this.inputDigit('9')}>9</button>
                <button onClick={() => this.setOperator('+')}>+</button>
            </div>
            <div className="row">
                <button onClick={() => this.inputDigit('4')}>4</button>
                <button onClick={() => this.inputDigit('5')}>5</button>
                <button onClick={() => this.inputDigit('6')}>6</button>
                <button onClick={() => this.setOperator('-')}>-</button>
            </div>
            <div className="row">
                <button onClick={() => this.inputDigit('1')}>1</button>
                <button onClick={() => this.inputDigit('2')}>2</button>
                <button onClick={() => this.inputDigit('3')}>3</button>
                <button onClick={() => this.setOperator('*')}>*</button>
            </div>
            <div className="row">
                <button className= "buttonRow" onClick={() => this.inputDigit('0')}>0</button>
                <button onClick={this.inputDecimal}>.</button>
                <button onClick={this.calculate}>=</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
