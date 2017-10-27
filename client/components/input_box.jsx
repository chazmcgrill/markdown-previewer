import React, { Component } from 'react';

class InputBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: this.props.defaultInput
    }
  }

  inputChange(event) {
    this.setState({text: event.target.value})
    this.props.inputText(event.target.value);
  }

  render() {
    return (
      <textarea
        onChange={this.inputChange.bind(this)}
        defaultValue={this.state.text}
      />
    );
  }
}

export default InputBox;
