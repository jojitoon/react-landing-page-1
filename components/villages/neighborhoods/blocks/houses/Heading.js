import React from 'react';
import ReactDOM from 'react-dom';

class Heading extends React.Component {
  render() {
    return (
      <div>
        <h2 className="heading">{this.props.title}</h2>
      </div>
    )
  }
}

module.exports = Heading;
