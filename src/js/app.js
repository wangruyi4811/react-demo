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
import ShoppingComponent from './navTip/ShoppingComponent'
import GoodsListComponent from './GoodsListComponent'
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
        <ShoppingComponent/>
        <GoodsListComponent/>
      </div>
      
    </Router>
  ),
  document.getElementById('root')
);
