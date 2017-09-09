require('babel-polyfill')

import '../css/index.css';
//import '../css/index.scss';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import { Router, Route, hashHistory } from 'react-router';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import IndexComponent from './IndexComponent'

ReactDOM.render(  
  (
    <Router
    basename="calendar"
    getUserConfirmation={function(){
      console.log(0)
    }}
    forceRefresh={false}
    keyLength={6}
    
    >
      <IndexComponent/>
    </Router>
  ),
  document.getElementById('root')
);
