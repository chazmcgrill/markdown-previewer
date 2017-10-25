import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputBox from './components/input_box.jsx';
import OutputBox from './components/output_box.jsx';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div className="container">
          <div>
            <InputBox />
          </div>
          <div>
            <OutputBox />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
