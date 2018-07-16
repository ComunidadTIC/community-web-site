import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import '../node_modules/jquery/dist/jquery.slim.min.js';
import '../node_modules/popper.js/dist/popper.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
