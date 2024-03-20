import { useState } from 'react';
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
  const [result, setResult] = useState('');
  const [computerResult, setComputerResult] = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    let userResult = judgement(choice[userChoice], computerChoice);
    setResult(userResult);
    if (userResult !== '😑') {
      setComputerResult(userResult === '😁' ? '😭' : '😁');
    } else {
      setComputerResult(userResult);
    }
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

  const resultCss = (result) => {
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

  return (
    <div>
      <div className="main">
        <Box
          title="user"
          item={userSelect}
          result={result}
          color={resultCss(result)}
        />
        <Box
          title="computer"
          item={computerSelect}
          result={computerResult}
          color={resultCss(computerResult)}
        />
      </div>
      <div className="main">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
