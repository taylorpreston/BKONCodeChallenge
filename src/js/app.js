console.log("HELLO WORLD")

import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import Main from './components/main'

ReactDOM.render((
  <Router>
    <Route path='/' component={Main}/>
  </Router>
),document.getElementById('app'))
