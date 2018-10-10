/*
* 计算得出新的状态
* redux最核心的管理对象模块

preState   先前的状态
 action   action函数传过来的对象{type:xxx,data:xxx}
*/

import {combineReducers} from "redux"//暴露出一个包含所有reducer中的函数
import {
  GET_TAG_LIST,
  GET_DATA_HOME,
  GET_NUM_GOODS,
  GET_CATE_LIST,
  GET_SPECIAL,
  GET_LIST,
  GET_LIST_TWO
} from './action-types'

const init=[]
const initObj={}

//第一页

//品牌制造直供
function tagList(state=init,action) {
  switch (action.type){
    case GET_TAG_LIST:
      return action.data
    default :
      return state
  }
}
//搜索框下的数据
function dataHome(state=init,action) {
  switch (action.type){
    case GET_DATA_HOME:
      let data=action.data
      let arr=[]
      data.forEach(item=>{
        arr.push(item.itemList)
      })
      return {dataHome:data,homeDataArr:arr}
    default :
      return state
  }
}
//新品首发的数据
function numGoods(state=init,action) {
  switch (action.type){
    case GET_NUM_GOODS:
      return action.data
    default :
      return state
  }
}
//好物精选的数据
function cateList(state=init,action) {
  switch (action.type){
    case GET_CATE_LIST:
      return action.data
    default :
      return state
  }
}
//专题精选
function Special(state=init,action) {
  switch (action.type){
    case GET_SPECIAL:
      return action.data
    default :
      return state
  }
}

//第三页
function List(state=init,action) {
  switch (action.type){
    case GET_LIST:
      return action.data
    default :
      return state
  }
}
function ListTwo(state=initObj,action) {
  switch (action.type){
    case GET_LIST_TWO:
      const getgoryInfo = action.data
      console.log(getgoryInfo)
      return {...getgoryInfo}
    default :
      return state
  }
}




export default combineReducers({
  tagList,
  dataHome,
  numGoods,
  cateList,
  Special,
  List,
  ListTwo
})