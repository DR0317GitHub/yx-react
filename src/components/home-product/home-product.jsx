import React, {Component} from 'react';
import {connect} from 'react-redux'
import './home-product.css'
import {getNumGoods1} from "../../redux/actions";
import BScroll from "better-scroll"


class Product extends Component {
  //获取函数
  componentWillMount() {
    this.props.getNumGoods1()
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
    const {numGoods}=this.props
    return (
      <div>
        <div className="product">
          <div className="product_title">
            <span>新品首发</span>
            <div className="product_button">
              <div className="name">查看全部</div>
              <i className="iconfont icon-icon"></i>
            </div>
          </div>
          <img
            src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png"/>
        </div>
        <div className="BSa-tter" ref="goodsList">
          <ul className="product_list float_clear">
            {
              numGoods.map((item, index) => (
                  <li className="product_item" key={index}>
                    <img src={item.listPicUrl}/>
                    <div className="product_item_text">
                      <div className="ellipsis item_text1">{item.name}</div>
                      <div className="ellipsis item_text2">{item.simpleDesc}</div>
                      <div className="item_text3">¥{item.retailPrice}</div>
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
  state => ({numGoods: state.numGoods}),
  {getNumGoods1}
)(Product)




