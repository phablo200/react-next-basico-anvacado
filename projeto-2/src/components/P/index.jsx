import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    state: { body },
    setState,
  } = theContext;

  //return <p onClick={() => setContextState({ ...contextState, counter: counter + 1 })}>{body}</p>;
  return <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>;
};
