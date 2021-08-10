import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './templates/Home/index';
import { CounterContextProvider } from './contexts/CounterContext';

ReactDOM.render(
    <React.StrictMode>
        <CounterContextProvider>
            <Home />
        </CounterContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
