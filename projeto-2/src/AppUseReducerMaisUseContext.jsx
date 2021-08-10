import { createContext, useContext, useReducer, useRef } from 'react';
import './App.css';
import P from 'prop-types';

//actions.js
const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
const globalState = {
  title: 'O Título que contexto',
  body: 'O ody do contexto',
  counter: 0,
};
console.log(globalState);

// reducer.js
const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar título');
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

//AppContext.jsx
const Context = createContext();
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  // Nesse caso você pode passar o dispatch para "baixo", ou "facilitar a vida de quem vai usar este componente criando funções"
  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

// h1/index.jsx
const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();
  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
