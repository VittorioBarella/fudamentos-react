import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

// REACT DOM INICIALIZA A APLICAÇÃO.
ReactDOM.render(
  <App nome='Fulano de tal' idade={26} />,
  document.getElementById('root')
);
// ELE QUE RENDERIZA A APLICAÇÃO.
