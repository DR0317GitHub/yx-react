/*
分类的路由组件
 */
import React, {Component} from 'react'
import "./List.css"
import {connect} from 'react-redux'
import BScroll from "better-scroll"

import {getList1,getList2} from '../../redux/actions'

class List extends Component {

  state = {
    selic: 0
  }

  componentDidUpdate() {
    if (this.refs.goScroll) {
      new BScroll(this.refs.goScroll, {
        click: true,
        scrollY: true,
        eventPassthrough: "viewport"
      })
      new BScroll(this.refs.toScroll, {
        click: true,
        scrollY: true,
        eventPassthrough: "viewport"
      })
    }
  }

  //获取函数
  componentWillMount() {
    this.props.getList1()
    this.props.getList2(0)
  }

  onRedConent = (index) => {
    this.setState({
      selic: index
    })
    this.props.getList2(index)
  }

  render(){
    const {List,ListTwo} = this.props
    console.log(222222222,this.props.ListTwo)
    if (!ListTwo.subCateList){
      return <div>loading</div>
    }

    return (
      <div className="div2">
        <div className="header">
          <div className="header_input">
            <i className="iconfont icon-search3"></i>
            <input type="text" placeholder="搜索商品,共9789款好物"/>
          </div>
        </div>

        <div className="Listnav" ref="toScroll">
          <ul className="list" >
            {
              List.map((item, index) => (
                <li key={index}>
                  <div className="list-left">
                    <div onClick={()=>this.onRedConent(index)}
                         className={index === this.state.selic ? "div on" : "div"}
                    >{item.name}</div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="div">

          <div className="ListDetail" ref="goScroll">
            <div className="warp">
                  <div className="banner">
                    <img src={ListTwo.bannerUrl} alt=""/>
                  </div>

                  <div className="detailTit">
                <span className="text">
                  <span>{ListTwo.name}</span>
                  <span>分类</span>
                </span>
                  </div>


                  <div className="detail">
                    <ul className="list">
                      {
                        ListTwo.subCateList.map((item,index)=>(
                      <li className="item"  key={index}>
                        <a href="javascript:;">
                          <img src={item.wapBannerUrl} alt=""/>
                          <span>{item.name}</span>
                        </a>
                      </li>
                        ))
                      }
                    </ul>
                  </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(
  state => ({List: state.List,ListTwo:state.ListTwo}),
  {getList1,getList2}
)(List)