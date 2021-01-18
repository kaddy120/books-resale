import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import {firebase} from './lib/firebase';
import { FirebaseContext } from './context/firebase';
import GlobalStyle from './globalStyles'


ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={firebase}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
