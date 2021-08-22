import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AppProviders } from 'providers/AppProviders';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProviders>
        <App />
      </AppProviders>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
