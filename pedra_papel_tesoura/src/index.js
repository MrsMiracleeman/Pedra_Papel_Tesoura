import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ingame from './Components/Ingame/Ingame';
import Lottie from 'react-lottie'

ReactDOM.render(
  <React.StrictMode>
      <div className='body'>
          <Ingame ></Ingame>
          <footer>
            <h1> Software desenvolvido por Rodrigo César</h1>
          </footer>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);


