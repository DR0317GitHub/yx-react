import React, {Component} from 'react';
import './home-tenTiment.css'
import {connect} from 'react-redux'

import {getCateList1} from "../../redux/actions"
import BScroll from "better-scroll"

 class SenTiment extends Component {

  componentWillMount(){
    this.props.getCateList1()
 }
   componentDidUpdate (){
     new BScroll(this.refs.goodsList,{
       click:true,
       scrollX:true,
       scrollY:false,
       eventPassthrough:"vertical"
     })

   }


  render() {
    const {cateList}=this.props
    return (
      <div>
        <div className="product">
          <div className="product_title">
            <span>人气推荐.好物精选</span>
            <div className="product_button">
              <div>查看全部</div>
              <i className="iconfont icon-icon"></i>
            </div>
          </div>
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png"/>
        </div>
        <div className="BStter" ref="goodsList">
          <ul className="product_list float_clear">
            {
              cateList.map((item,index)=>(
                <li className="product_item" key={index}>
                  <img src={item.listPicUrl}/>
                  <div className="product_item_text">
                    <div className="ellipsis item_text1">{item.name}</div>
                    <div className="ellipsis item_text2">{item.simpleDesc}</div>
                    <div className="item_text3">¥333</div>
                  </div>
                </li>
                )
              )
            }

          </ul>
        </div>
      </div>
        )
        }
        }


export default connect(
  state=>({cateList:state.cateList}),
{getCateList1}
)(SenTiment)










