import React, { useEffect, useState } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado.</h1>;
    }

    // eslint-disable-next-line
    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Que chato !!');
    }
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click to increase {counter}</button>
    </div>
  );
};

export const App = () => {
  return (
    <div {...s}>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
    </div>
  );
};
