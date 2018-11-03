import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import ArticleCover from './blocks/houses/Article Cover.js';
import SectionDescription from './blocks/Section Description.js';

class SectionB extends React.Component {
  render() {
    return (
      <section className="section-b">
        <Container>
          <Row>
            <ArticleCover/>
            <SectionDescription title="Transferência de Arquivos"
                description="Com intuito de facilitar a transfencia de arquivos em larga escala, quantas vezes você precisou transferir mais de 20 gigas de dados e não foi possivel pela limitação do seu provedor? Com o Better você consegue transferir até 20gb de forma gratuita."         
            />
          </Row>
        </Container>
      </section>
    )
  }
}

module.exports = SectionB;
