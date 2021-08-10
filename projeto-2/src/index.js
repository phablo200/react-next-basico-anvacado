import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './templates/App';
import { Abc } from './templates/Abc';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Page404 } from './components/Page404';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/cde/:slug?" exact component={Abc} />
        <Route path="/" exact component={App} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
