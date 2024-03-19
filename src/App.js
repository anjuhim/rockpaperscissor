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
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20231004_115%2F16963969039050YxE2_JPEG%2Fv1.jpg&type=a340',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://search.pstatic.net/sunny/?src=http%3A%2F%2Fthumbnail.10x10.co.kr%2Fwebimage%2Fimage%2Fbasic600%2F178%2FB001789085-2.jpg%3Fcmd%3Dthumb%26w%3D500%26h%3D500%26fit%3Dtrue%26ws%3Dfalse&type=sc960_832',
  },
  paper: {
    name: 'Paper',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220731_213%2F1659195744793qd05B_JPEG%2F60331590489769104_1069355099.jpg&type=a340',
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
    if (userResult !== '비김') {
      setComputerResult(userResult === '이김' ? '짐' : '이김');
    } else {
      setComputerResult(userResult);
    }
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return '비김';
    } else if (user.name === 'Rock') {
      return computer.name === 'Scissors' ? '이김' : '짐';
    } else if (user.name === 'Scissors') {
      return computer.name === 'Paper' ? '이김' : '짐';
    } else if (user.name === 'Paper') {
      return computer.name === 'Rock' ? '이김' : '짐';
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
      case '짐':
        css = 'red';
        break;
      case '이김':
        css = 'green';
        break;
      case '비김':
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
