import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/welcome'
import Weather from './components/weather'
import './styles/styles.css'

ReactDOM.render(
  <React.StrictMode>
    <Welcome/>
    <div className="cards">
      <Weather/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


