import React from 'react';
import ReactDOM from 'react-dom';

import Header from './neighborhoods/Header.js';
import SectionA from './neighborhoods/Section A.js';
import SectionB from './neighborhoods/Section B.js';
import SectionC from './neighborhoods/Section C.js';
import Footer from './neighborhoods/Footer.js';
import Video from './neighborhoods/blocks/Video.js';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Header messages={false} title={"Better"} subtitle={"Você conectado com o mundo através do Better."} video={<Video/>}/>
        <SectionA/>
        <SectionB/>
        <SectionC title={"Conheça o Better"} subtitle={"O Better é o aplicativo para se conectar em qualquer lugar do mundo!."}/>
        <Footer/>
      </div>
    )
  }
}

module.exports = LandingPage;
