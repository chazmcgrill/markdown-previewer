import React, {Component} from 'react';
import marked from 'marked';

marked.setOptions({
  sanitize: true
});

class OutputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputText: this.props.defaultOutput
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ outputText: nextProps.output});
  }

  converter() {
    var converted = marked(this.state.outputText);
    return { __html: converted};
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.converter()} />
    );
  }
}

export default OutputBox;
