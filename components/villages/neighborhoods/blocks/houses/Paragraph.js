import React from 'react';
import ReactDOM from 'react-dom';

class Paragraph extends React.Component {
  render() {
    return (
      <div>
        <p className="paragraph">
            {this.props.description}
        </p>
      </div>
    )
  }
}

module.exports = Paragraph;
