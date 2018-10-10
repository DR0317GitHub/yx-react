/*
redux最核心的管理对象模块
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


import reducer from './reducers'

// 向外暴露store对象
export default createStore(reducer, applyMiddleware(thunk))