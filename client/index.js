import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputBox from './components/input_box.jsx';
import OutputBox from './components/output_box.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      defaultString: "Main Heading\n=====\nSmaller Heading\n-----\n### Even Smaller Heading\nParagraph number one.\n\nParagraph number two.  \nwith a line break\n\nBulleted list:\n* *italic*\n* **bold**\n* `monospace`\n* ~~strikethrough~~\n\nNumbered list:\n1. coding\n2. more coding\n3. even more coding\n\n*[My Website](http://www.charlietaylordev.com)*"
    }
  }

  handleInput(input) {
    this.setState({"text": input});
  }

  render() {
    return (
      <div className="container">
        <div className="box input-box">
          <InputBox
            inputText={this.handleInput.bind(this)}
            defaultInput={this.state.defaultString}
          />
        </div>
        <div className="box output-box">
          <OutputBox
            output={this.state.text}
            defaultOutput={this.state.defaultString}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
