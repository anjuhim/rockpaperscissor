import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      userResult: '',
      computerResult: '',
      userCounter: 0,
      computerCounter: 0,
      totalCounter: 0,
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
    console.log('play totalCounter : ' + this.state.totalCounter);

    this.setState({
      totalCounter: this.state.totalCounter + 1,
      userSelect: this.choice[userChoice],
    });

    let computerChoice = this.randomChoice();
    this.setState({
      computerSelect: computerChoice,
    });

    let gameResult = this.judgement(this.choice[userChoice], computerChoice);

    this.setState({
      userResult: gameResult,
      userCounter:
        gameResult === '😁'
          ? this.state.userCounter + 1
          : this.state.userCounter,
    });

    if (gameResult !== '😑') {
      gameResult = gameResult === '😁' ? '😭' : '😁';
      this.setState({
        computerCounter:
          gameResult === '😁'
            ? this.state.computerCounter + 1
            : this.state.computerCounter,
      });
    }

    this.setState({
      computerResult: gameResult,
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

  showResult = () => {
    if (this.state.userCounter === this.state.computerCounter) {
      return 'Tie';
    } else {
      return this.state.userCounter > this.state.computerCounter
        ? 'USER Win'
        : 'COMPUTER Win';
    }
  };

  componentDidUpdate = () => {
    console.log('componentDidUpdate totalCounter : ' + this.state.totalCounter);
    if (this.state.totalCounter === 3) {
      alert(this.showResult());
    }
  };

  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  };

  render() {
    console.log('render totalCounter : ' + this.state.totalCounter);

    return (
      <div>
        <div className="main">
          <label className="mgr5">{this.state.userCounter}</label>
          <label className="mgr5">:</label>
          <label>{this.state.computerCounter}</label>
        </div>
        <div className="main">
          <BoxClass
            title="user"
            item={this.state.userSelect}
            result={this.state.userResult}
          />
          <BoxClass
            title="computer"
            item={this.state.computerSelect}
            result={this.state.computerResult}
          />
        </div>
        {this.state.totalCounter < 3 && (
          <div className="main">
            <button className="mgr5" onClick={() => this.play('scissors')}>
              가위
            </button>
            <button className="mgr5" onClick={() => this.play('rock')}>
              바위
            </button>
            <button onClick={() => this.play('paper')}>보</button>
          </div>
        )}
        {this.state.totalCounter === 3 && (
          <div className="main">
            <label>{`${this.showResult()}`}</label>
          </div>
        )}
        <div className="main">
          <label>totalCouter : {this.state.totalCounter}</label>
        </div>
      </div>
    );
  }
}
