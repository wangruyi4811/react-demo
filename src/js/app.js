require('babel-polyfill')
require('es6-promise').polyfill();
import '../css/index.css';
//import '../css/index.scss';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import { Router, Route, hashHistory } from 'react-router';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Header from './HeaderComponent'
import IndexComponent from './IndexComponent'
import TabUlComponent from './TabUlComponent'
import MenuComponent from './MenuComponent'
import ShoppingListComponent from './pages/ShoppingListComponent'
import {TipNavComponent} from './common/TipNavComponent'
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
      <div>
        <Header/>
        <div style={{'padding':'0 0.3rem','fontSize':'0.26rem'}}>
          <TipNavComponent/>
          <ShoppingListComponent/>
        </div>
        
      </div>
      
    </Router>
  ),
  document.getElementById('root')
);
