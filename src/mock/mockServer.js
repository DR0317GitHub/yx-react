import Mock from "mockjs"
import datahome from "./datahome.json"
import datatopic from "./datatopic.json"
import datanav from "./datanav.json"

Mock.mock('/datahome', {code: 0, data: datahome.cateList})
Mock.mock('/taglist', {code: 0, data: datahome.tagList})
Mock.mock('/newgoods', {code: 0, data: datahome.newItemNewUserList})
Mock.mock('/numbergoods', {code: 0, data: datahome.newItemNewUserList})
Mock.mock('/catelist', {code: 0, data: datahome.popularItemOldUserList})
Mock.mock('/special', {code: 0, data: datahome.topicList})
Mock.mock('/column', {code: 0, data: datatopic.column})
Mock.mock('/recommend', {code: 0, data: datatopic.recommend})
Mock.mock('/more', {code: 0, data: datatopic.findMore})
Mock.mock('/list', {code: 0, data: datanav.categoryL1List})
