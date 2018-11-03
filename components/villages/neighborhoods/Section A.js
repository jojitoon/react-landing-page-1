import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Laptop from './blocks/houses/Laptop.js';
import SectionDescription from './blocks/Section Description.js';

class SectionA extends React.Component {
  render() {
    return (
      <section className="section-a">
        <Container>
          <Row>
            <SectionDescription title="Video Chamada"
                description="Ja pensou na possibilidade de realizar chamadas de videos sem a necessidade de fazer cadastros chatos? Pois é, agora é possivel com o Better inicie chamadas de qualquer lugar com um simples click."
            />
            <Laptop/>
          </Row>
        </Container>
      </section>
    )
  }
}


module.exports = SectionA;
