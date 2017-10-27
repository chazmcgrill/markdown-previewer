import React, {Component} from 'react';
import marked from 'marked';

class OutputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputText: "Markdown"
    }
  }

  componentWillReceiveProps(nextProps) {
    var converted = marked(nextProps.output);
    this.setState({ outputText: converted});
  }

  render() {
    return (
      <div>        
        {this.state.outputText}
      </div>
    );
  }
}

export default OutputBox;
