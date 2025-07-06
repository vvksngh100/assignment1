import React from "react";

class ClassCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleDecrement() {
    if (this.state.count > 0) {
      this.setState((state) => ({
        count: state.count - 1,
      }));
    }
  }

  handleIncrement() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  render() {
    return (
      <>
        {this.props.children}
        <div className="counter">
          <button
            onClick={this.handleDecrement}
            disabled={this.state.count === 0}
          >-</button>
          <p>{this.state.count}</p>
          <button onClick={this.handleIncrement}>+</button>
        </div>
      </>
    );
  }
}

export default ClassCounter;
