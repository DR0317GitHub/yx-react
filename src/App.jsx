import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'

import Home from './containers/home/home' //首页
import General from './containers/general/general'  //识物
import List from './containers/list/list' //分类
import ShoppingCart from './containers/shopping/shopping'//购物车
import Personal from './containers/personal/personal'//个人中心
import Footer from './components/footer/footer'//底部

import "./static/css/react.css"

class App extends Component {

  render() {
    const path=this.props.location.pathname
    if(path==="/"){
      return <Redirect to={"/home"}/>
    }
    return (
      <div id="div0">
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/general' component={General}/>
          <Route path='/list' component={List}/>
          <Route path='/shoppingcart' component={ShoppingCart}/>
          <Route path='/personal' component={Personal}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
