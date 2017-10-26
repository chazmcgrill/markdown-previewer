import React, {Component} from 'react';

const OutputBox = (props) => {
  console.log(props);
  return (
    <p>{props.outputText}</p>
  );
};

export default OutputBox;
