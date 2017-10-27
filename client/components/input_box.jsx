import React, { Component } from 'react';

class InputBox extends Component {

  inputChange(event) {
    this.props.inputText(event.target.value);
  }

  render() {
    return (
      <textarea
        onChange={this.inputChange.bind(this)}
        placeholder="Insert text here"
      />
    );
  }

}

export default InputBox;
