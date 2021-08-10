import { useReducer } from 'react';
import './App.css';
import { initialState } from './contexts/AppContext/data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  // Evoluir o estado...
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, counter } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>

      <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-BR') })}>Muda</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
    </div>
  );
}

export default App;
