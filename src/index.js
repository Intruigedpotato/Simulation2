import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
<Router>
    <Provider>
        <App />
    </Provider>
</Router>
, document.getElementById('root'));
registerServiceWorker();
