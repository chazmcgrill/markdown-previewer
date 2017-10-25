import React from 'react';
import Marked from 'marked';

console.log();

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        { Marked('mark down __test__.') }
      </div>
    )
  }
}
