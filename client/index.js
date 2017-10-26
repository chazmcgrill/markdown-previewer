import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputBox from './components/input_box.jsx';
import OutputBox from './components/output_box.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: 'output goes here'
    }
  }

  // covert sent back message

  render() {
    return (
      <div>
        <div className="container">
          <div className="box input-box">
            <InputBox inputText={message}/>
          </div>
          <div className="box output-box">
            <OutputBox outputText={this.state.message} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
