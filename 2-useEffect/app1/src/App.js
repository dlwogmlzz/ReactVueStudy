// CSS
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

// JSX 문법
export default function App() {
  // JS
  const [isOpen, setIsOpen] = useState(false)
  // XML
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{ isOpen ? '닫기' : '열기' }</button>
      { isOpen && <Counter/> }
      { isOpen && <Counter/> }
      { isOpen && <Counter/> }
      { isOpen && <Counter/> }
      { isOpen && <Counter/> }
      { isOpen && <Counter/> }
    </>
  );
}
// export default App;
