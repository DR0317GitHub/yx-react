import React, {Component} from 'react';
import './home-select.css'
import {connect} from 'react-redux'

import {getSpecial1} from "../../redux/actions"

import BScroll from "better-scroll"
class Select extends Component {

  componentWillMount() {
    this.props.getSpecial1()
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
    const {Special} = this.props
    return (

      <div>
        {/*<!--专题精选-->*/}
        <section className="straight">
          <div className="straight_title">
            <span>专题精选</span>
            <i className="iconfont icon-youjiantou"></i>
          </div>
        </section>

        <div className="BScrolltter" ref="goodsList">
          <ul className="product_list float_clear">
            {
              Special.map((item, index) => (
                <li className="product_item">
                  <img src={item.itemPicUrl}/>
                  <div className="product_item_text">
                    <div className="ellipsis item_text1">{item.subtitle}</div>
                    <div className="ellipsis item_text2">{item.title}</div>
                  </div>
                  <div className="item_text3">¥{item.priceInfo}起</div>
                </li>
              ))
            }


          </ul>
        </div>

      </div>
    )
  }
}

export default connect(
  state => ({Special: state.Special}),
  {getSpecial1}
)(Select)




