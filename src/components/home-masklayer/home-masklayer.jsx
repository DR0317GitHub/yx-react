import React, {Component} from 'react';

import './home-masklayer.css'

class Masklayer extends Component {
  state = {
    showHint: true
  }

  chengeHint = () => {
    this.setState({
      showHint: false
    })
  }

  render() {
    return (
      <div>
        <div className="gif" style={{display: this.state.showHint ? "none" : "block"}}>
          <div className="gif-img"/>
        </div>
        <div name="fade">
          <div className="m-newWapUserGiftModal" style={{
            display: this.state.showHint ? 'block' : 'none'
          }}>
            <div className="mask"/>
            <i className="close" onClick={this.chengeHint}/>
            <div className="wrap">
              <div className="modle">
                <div className="title">
                  <i className="titleContent">- 新人专享礼 -</i>
                </div>
                <div className="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
                <div className="m-newUserItem">
                  <div className="img">
                    <img
                      src="http://yanxuan.nosdn.127.net/4c372b5314d26235324abb0cf7f0713a.jpg?imageView&amp;quality=85&amp;thumbnail=232y232"
                      alt=""/>
                  </div>
                  <div className="content">
                    <div className="itemName">花样年华女士小白鞋</div>
                    <div className="manu">
                      <i className="manuTag">舒适透气，时尚经典</i>
                    </div>
                    <div className="price">
                      <div className="retailPrice">
                        <span>¥</span>
                        <span>259.00</span>
                      </div>
                      <div className="comparePrice">
                        <span>¥</span>
                        <span>899.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="actCouponBtn">
              <span>
                <span>领券立减¥</span>
                <span>60.00</span>
              </span>
                  <div className="linkBtn">查看更多特惠商品</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Masklayer




