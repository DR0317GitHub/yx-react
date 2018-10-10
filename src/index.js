/*
入口JS
 */
import store from './redux/store'
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import "./mock/mockServer"

import App from './App'


ReactDOM.render((
  <Provider store={store}>
  <HashRouter>
    <Switch>
      <Route path='/' component={App}/>
    </Switch>
  </HashRouter>
  </Provider>
), document.getElementById('root'))

