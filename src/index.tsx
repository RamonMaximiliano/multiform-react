import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Specifically for deploy on GitHUb pages it needs to be the HashRouter, since BrowserRouter is not supported by GitHub pages

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);



/*

There is an error that may happen if you render as in the below, so prefer to use the above

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
