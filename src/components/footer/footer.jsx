import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './footer.css'
/*
主界面的底部导航
 */
class Footer extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div>
        <footer className="footer">
          <nav  className={`footer_guide ${ this.props.location.pathname==='/login'? 'hide' : null}`}>
            <a href="javascript:;" className={`item ${this.props.location.pathname==='/home' ? 'active' : null}`} onClick={()=>this.props.history.push('/home')} >
              <i className="iconfont icon-sinaweibo05"></i>
              <span>首页</span>
            </a>
            <a href="javascript:; " className={`item  ${this.props.location.pathname==='/general' ? 'active' : null}`} onClick={()=>this.props.history.push('/general')} >
              <i className="iconfont icon-hui"></i>
              <span>识物</span>
            </a>
            <a href="javascript:; "  className={`item  ${this.props.location.pathname==='/list' ? 'active' : null}`} onClick={()=>this.props.history.push('/list')} >
              <i className="iconfont icon-chouti"></i>
              <span>分类</span>
           </a>
            <a href="javascript:; "  className={`item  ${this.props.location.pathname==='/shoppingcart' ? 'active' : null}`} onClick={()=>this.props.history.push('/shoppingcart')} >
              <i className="iconfont icon-tab-bar--n"></i>
              <span>购物车</span>
            </a>
            <a href="javascript:; "  className={`item  ${this.props.location.pathname==='/personal' ? 'active' : null}`} onClick={()=>this.props.history.push('/personal')} >
              <i className="iconfont icon-nanrentouxiang"></i>
              <span>个人</span>
            </a>
          </nav>
        </footer>
      </div>
    )
  }
}


// 问题: 非路由组件如何能使用路由的API?
// 解决: 使用withRouter包装组件
// 向外暴露包装后的组件
// 向NavFooter传入3个路由属性: history/location/match
export default withRouter(Footer)