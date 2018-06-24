import React from 'react';
import ReactDOM from 'react-dom';

import {
    // BrowserRouter as Router,
    HashRouter as Router,
} from "react-router-dom";

import IndexRoutes from "src/routes/index.js";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <IndexRoutes/>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
