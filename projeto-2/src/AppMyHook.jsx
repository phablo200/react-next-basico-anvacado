import { useEffect, useState, useRef } from 'react';
import './App.css';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(20000);
  const [incrementor, setIncrementor] = useState(100);

  const cb = () => setCounter((c) => c + 1);
  useMyHook(cb, delay);

  useEffect(() => {
    setInterval(() => {
      setCounter((c) => c + 1);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button onClick={() => setDelay((d) => d + incrementor)}>+{incrementor}</button>
      <button onClick={() => setDelay((d) => d - incrementor)}>-{-incrementor}</button>
      <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))} />
    </div>
  );
}

export default App;
