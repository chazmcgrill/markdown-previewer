import React, { Component } from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <textarea
        onChange={event => this.inputChange(event.target.value)}
      />
    );
  }

  inputChange(text) {
    this.setState({text});
    this.props.inputText(text);
  }
}

export default InputBox;
