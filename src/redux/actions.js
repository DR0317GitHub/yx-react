/*
包含n个action creator
异步action
同步action
 */

import {
  GET_TAG_LIST,
  GET_DATA_HOME,
  GET_NUM_GOODS,
  GET_CATE_LIST,
  GET_SPECIAL,
  GET_LIST,
  GET_LIST_TWO
} from './action-types'
import {
  getTagList,
  getDataHome,
  getNumGoods,
  getCateList,
  getSpecial,
  getList
} from '../api'

const saveDataHome=(data)=>({type:GET_DATA_HOME,data});
const saveTagList=(data)=>({type:GET_TAG_LIST,data});
const saveNumGoods=(data)=>({type:GET_NUM_GOODS,data});
const saveCateList=(data)=>({type:GET_CATE_LIST,data})
const saveSpecial=(data)=>({type:GET_SPECIAL,data})
const saveList=(data)=>({type:GET_LIST,data})
const saveList1=(getgoryInfo)=>({type:GET_LIST_TWO,data:getgoryInfo})


export const getTagList1 =()=>{
  return async dispatch=>{
    const result =await getTagList();
    if(result.code===0){
      dispatch(saveTagList(result.data))
    }
  }
}

export const getDataHome1=()=>{
  return async dispatch=>{
    const result = await getDataHome();
    if (result.code===0){
      dispatch(saveDataHome(result.data))
    }
  }
}

export const getNumGoods1=()=>{
  return async dispatch=>{
    const result = await getNumGoods();
    if (result.code===0){
      dispatch(saveNumGoods(result.data))
    }
  }
}

export const getCateList1=()=>{
  return async dispatch=>{
    const result = await getCateList();
    if (result.code===0){
      dispatch(saveCateList(result.data))
    }
  }
}

export const getSpecial1=()=>{
  return async dispatch=>{
    const result = await getSpecial();
    if (result.code===0){
      dispatch(saveSpecial(result.data))
    }
  }
}

export const getList1=()=>{
  return async dispatch=>{
    const result = await getList();
    if (result.code===0){
      const categoryInfo = result.data
      dispatch(saveList(categoryInfo))
    }
  }
}

export const getList2=(index)=>{
  return async dispatch=>{
    const result = await getList();
    if (result.code===0){
      const getgoryInfo = result.data[index]
      dispatch(saveList1(getgoryInfo))
    }
  }
}