import React, { useState, Suspense } from 'react';

const loadComponent = () => {
  console.log('component carregando...');
  return import('./LazyComponent');
};

const LazyComponent = React.lazy(loadComponent);

export const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow(!show)}>
          {show ? 'Exibir' : 'Esconder'}
        </button>
      </p>
      <Suspense fallback={<p>Carregando...</p>}>{show && <LazyComponent />}</Suspense>
    </div>
  );
};
