// CSS
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Counter from './components/Counter';

// JSX 문법
export default function App() {
  // JS
  const [isOpen, setIsOpen] = useState(false)
  // App에다 선언하고 props로 넘겨주기
  const [number, setNumber] = useState(0)
  
  // XML
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{ isOpen ? '닫기' : '열기' }</button>
      { isOpen && <Cart/> }
      { isOpen && <Cart/> }
      { isOpen && <Cart/> }
      { isOpen && <Cart/> }
      { isOpen && <Cart/> }
      <hr />
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
    </>
  );
}
// export default App;
