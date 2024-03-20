import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
      computerResult: '',
    };
  }

  choice = {
    rock: {
      name: 'Rock',
      img: 'image/rock.png',
    },
    scissors: {
      name: 'Scissors',
      img: 'image/scissors.png',
    },
    paper: {
      name: 'Paper',
      img: 'image/paper.png',
    },
  };

  play = (userChoice) => {
    this.setState({
      userSelect: this.choice[userChoice],
    });

    let computerChoice = this.randomChoice();
    this.setState({
      computerSelect: computerChoice,
    });

    let userResult = this.judgement(this.choice[userChoice], computerChoice);
    this.setState({
      result: userResult,
    });

    if (userResult !== '😑') {
      userResult = userResult === '😁' ? '😭' : '😁';
    }
    this.setState({
      computerResult: userResult,
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return '😑';
    } else if (user.name === 'Rock') {
      return computer.name === 'Scissors' ? '😁' : '😭';
    } else if (user.name === 'Scissors') {
      return computer.name === 'Paper' ? '😁' : '😭';
    } else if (user.name === 'Paper') {
      return computer.name === 'Rock' ? '😁' : '😭';
    }
  };

  randomChoice = () => {
    let objectChoice = Object.keys(this.choice); // 객체의 key값만 뽑아서 Array로 만들어주는 함수
    let randomIndex = Math.floor(Math.random() * objectChoice.length);
    let final = objectChoice[randomIndex];
    return this.choice[final];
  };

  resultCss = (result) => {
    let css = '';
    switch (result) {
      case '😭':
        css = 'green';
        break;
      case '😁':
        css = 'red';
        break;
      case '😑':
        css = 'black';
        break;
      default:
        css = '';
    }
    return css;
  };

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="user"
            item={this.state.userSelect}
            result={this.state.result}
            color={this.resultCss(this.state.result)}
          />
          <BoxClass
            title="computer"
            item={this.state.computerSelect}
            result={this.state.computerResult}
            color={this.resultCss(this.state.computerResult)}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play('scissors')}>가위</button>
          <button onClick={() => this.play('rock')}>바위</button>
          <button onClick={() => this.play('paper')}>보</button>
        </div>
      </div>
    );
  }
}
