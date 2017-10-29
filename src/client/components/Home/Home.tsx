import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { GameWindow } from '../GameWindow/GameWindow';

const css = require('./Home.css');
const logoImg = require('../../../../assets/images/logo.png');

export class Home extends React.Component {
  public render() {
    return (
      // <Jumbotron>
      //   <img src={logoImg} className={css.logo} />
      //   <p>This is a starter kit to get you up and running with React with TypeScript.</p>
      //   <h1>FullStack React with TypeScript</h1>
      // </Jumbotron>
      <GameWindow />
    );
  }
}
