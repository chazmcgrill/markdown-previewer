import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputBox from './components/input_box.jsx';
import OutputBox from './components/output_box.jsx';

class App extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="box input-box">
            <InputBox />
          </div>
          <div className="box output-box">
            <OutputBox />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
