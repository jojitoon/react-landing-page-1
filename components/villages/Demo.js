import React from 'react';
import ReactDOM from 'react-dom';

import Header from './neighborhoods/Header.js';
import Footer from './neighborhoods/Footer.js';
import Video from './neighborhoods/blocks/Video.js';

import Navigation from './neighborhoods/blocks/Navigation.js';
import CallToAction from './neighborhoods/blocks/Call To Action.js';
import SlackChannel from './neighborhoods/blocks/Slack Channel.js';

class Demo extends React.Component {
  render() {
    return (
      <div className="demo">
        <Container>
          <Row>
            <Navigation/>
          </Row>
          <Row>
            <CallToAction title={this.props.title} subtitle={this.props.subtitle}/>
          </Row>
          <Row>
            <SlackChannel messages={this.props.messages}/>
            {this.props.video}
          </Row>
        </Container>
       
        <Footer/>
      </div>
    )
  }
}

module.exports = Demo;
