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
    img: 'https://th.bing.com/th/id/OIP.0wufRt0HJRZbsnqrYkXwcAHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://th.bing.com/th?id=OIP.uaSqrGjX5Y1DSddy1S1XVwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  },
  paper: {
    name: 'Paper',
    img: 'https://th.bing.com/th/id/OIP.Jtx_U3sUu0ljh9nR6f-WtwHaF8?w=241&h=194&c=7&r=0&o=5&pid=1.7',
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        {/* <Box title="Computer" /> */}
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
