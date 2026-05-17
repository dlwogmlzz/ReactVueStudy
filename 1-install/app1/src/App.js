// CSS
import { useState } from 'react';
import './App.css';

// JSX 문법
export default function App() { // 이렇게 한줄로 해도 된다. export default App
  // JS
  // 리액트에서 변수는 항상 local state 또는 global state로 관리해야 함. Destructuring문법으로 선언을 해야 한다.
  const [number, setNumber] = useState(0) // [state이름, 함수선언(새로운 객체, 주소에 새로운 값을 갈아끼운다.)]
  // const increase = (v) => v++
  // const decrease = (v) => v--
  /*
    DOM에서 함수를 이벤트리스너로 불러올 때는 함수형 업데이트가 필수..
    함수형 업데이트 : () => { return sth } 
  */
  const increase = () => setNumber(number + 1)
  const decrease = () => setNumber(number - 1)

  // let number = 1; let으로 선언을 하면 불변성의 법칙을 깬다.
  // const number = useState(0);

  // XML
  return (
    <>
      <div className="App">
        { number }
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
      <div></div>
    </>
    // div태그가 두개 이상있으면 안된다. 무조건 하나, 두개 이상 쓰고 싶을떄는 <>프레그먼트로 div태그를 감싸주면된다.
  );
}

// import할수 있게 준비를 해라. 얘가 있어야지 import가 된다.
// export default App;
