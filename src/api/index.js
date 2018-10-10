import ajax from "./ajax"
export const getDataHome=()=>ajax("/datahome")
export const getTagList=()=>ajax("/taglist")
export const getNewGoods=()=>ajax("/newgoods")
export const getCateList=()=>ajax("/catelist")
export const getSpecial=()=>ajax("/special")
export const getColumn=()=>ajax("/column")
export const getRecommend=()=>ajax("/recommend")
export const getMore=()=>ajax("/more")
export const getList=()=>ajax("/list")
export const getNumGoods=()=>ajax("/numbergoods")