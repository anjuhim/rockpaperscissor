import { useEffect, useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임 ** 주의사항 : 함수는 callback함수 형태로 보여줘야 한다. ** 초기값이 null일 때 에러방지를 위한 가드 값을 꼭 넣어줘야 한다.
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다 (이기면- 초록, 지면 - 빨강, 비기면 -검정)

const choice = {
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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState('');
  const [computerResult, setComputerResult] = useState('');
  const [userCounter, setUserCounter] = useState(0);
  const [computerCounter, setComputerCounter] = useState(0);
  const [totalCounter, setTotalCounter] = useState(0);

  const play = (userChoice) => {
    setTotalCounter(totalCounter + 1);
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    let gameResult = judgement(choice[userChoice], computerChoice);
    setUserResult(gameResult);
    setUserCounter(gameResult === '😁' ? userCounter + 1 : userCounter);
    if (gameResult !== '😑') {
      gameResult = gameResult === '😁' ? '😭' : '😁';
      setComputerCounter(
        gameResult === '😁' ? computerCounter + 1 : computerCounter
      );
    }
    setComputerResult(gameResult);
  };

  const judgement = (user, computer) => {
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

  const randomChoice = () => {
    let objectChoice = Object.keys(choice); // 객체의 key값만 뽑아서 Array로 만들어주는 함수
    let randomIndex = Math.floor(Math.random() * objectChoice.length);
    let final = objectChoice[randomIndex];
    return choice[final];
  };

  const showResult = () => {
    if (userCounter === computerCounter) {
      return 'Tie';
    } else {
      return userCounter > computerCounter ? 'USER Win' : 'COMPUTER Win';
    }
  };

  useEffect(() => {
    if (totalCounter === 3) {
      alert(showResult());
    }
  }, [totalCounter]);

  return (
    <div>
      <div className="main">
        <label className="mgr5">{userCounter}</label>
        <label className="mgr5">:</label>
        <label>{computerCounter}</label>
      </div>
      <div className="main">
        <Box title="user" item={userSelect} result={userResult} />
        <Box title="computer" item={computerSelect} result={computerResult} />
      </div>
      {totalCounter < 3 && (
        <div className="main">
          <button className="mgr5" onClick={() => play('scissors')}>
            가위
          </button>
          <button className="mgr5" onClick={() => play('rock')}>
            바위
          </button>
          <button onClick={() => play('paper')}>보</button>
        </div>
      )}
      {totalCounter === 3 && (
        <div className="main">
          <label>{`${showResult()}`}</label>
        </div>
      )}
      <div className="main">
        <label>totalCouter : {totalCounter}</label>
      </div>
    </div>
  );
}

export default App;
