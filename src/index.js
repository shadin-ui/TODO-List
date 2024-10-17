import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This is the default index.css file
import './styles.css'; // Add this line to import your custom styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
