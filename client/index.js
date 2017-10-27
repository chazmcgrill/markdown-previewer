import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputBox from './components/input_box.jsx';
import OutputBox from './components/output_box.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: 'output goes here'
    }
  }

  // covert sent back text
  handleInput(input) {
    this.setState({"text": input});
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="box input-box">
            <InputBox inputText={this.handleInput.bind(this)}/>
          </div>
          <div className="box output-box">
            <OutputBox output={this.state.text} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
