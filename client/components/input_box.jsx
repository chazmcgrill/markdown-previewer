import React, { Component } from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };
  }

  render() {
    return (
      <textarea
        // value={this.state.message}
        onChange={event => this.setState({message: event.target.value})}
      />
    );
  }
}

export default InputBox;
