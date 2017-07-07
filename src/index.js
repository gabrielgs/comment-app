import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Main from './components/Main'
import Nav from './components/nav/Nav'
import LineChart from './components/linechart/LineChart'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Main} />
      <Route path="/estadisticas" component={LineChart} />
    </div>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
