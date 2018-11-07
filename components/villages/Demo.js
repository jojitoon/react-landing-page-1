import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

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
          <Header title="Better" subtitle="Com o Better você está conectado com o mundo." video={<Video/>}/>         
          <Footer/>
      </div>
    )
  }
}

module.exports = Demo;
