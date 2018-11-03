import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class SlackChannel extends React.Component {
  render() {
    //Boolean flag passed down for deciding what to render
    const messages = this.props.messages;
    return (
      <Col lg={12}>
        <img className="slack-channel" src="./images/img1.svg"/>
      </Col>
    )
  }
}

module.exports = SlackChannel;
