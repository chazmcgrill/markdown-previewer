import React, {Component} from 'react';

class OutputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputText: "Markdown"
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ outputText: nextProps.output})
  }

  render() {
    return (
      <p>{this.state.outputText}</p>
    );
  }
}

export default OutputBox;
