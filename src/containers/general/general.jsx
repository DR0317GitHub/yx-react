/*
识物的路由组件
 */
import React, {Component} from 'react'
import BScroll from "better-scroll"
import "./general.css"



import Grey from '../../components/grey/grey'



export default class General extends Component {

  componentDidUpdate() {
    console.log(4444444444)
    if (this.refs.toScroll) {
      new BScroll(this.refs.toScroll, {
        click: true,
        scrollX: false,
        scrollY: true,
        eventPassthrough: "viewport"
      })
    }
  }

  render() {
    return (
      <div className="topic">
        {/*<!--固定头部-->*/}
        <header>
          <div className="header_input">
            <img
              src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png"
              alt="网易优选"/>
            <i className="iconfont icon-sinaweibo05 home"></i>
            <div className="seacher">
              <i className="iconfont icon-search3 "></i>
              <i className="iconfont icon-tab-bar--n chart"></i>
            </div>

          </div>

        </header>
        {/*<!--锚点-->*/}
        <div className="maoD">
          <a href="javaScript:;">
            <div>
              <i className="iconfont icon-arrowup"></i>
            </div>
          </a>
        </div>
        <div className="viewport-G" ref="toScroll">
          <div className="content">
            {/*<!--轮播图-->*/}
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="javascript:;">
                    <img src="" alt=""/>
                    <div className="opcit">
                      <div className="opcit1">--xxx--</div>
                      <div className="opcit2">xxx</div>
                      <div className="opcit3">xxx</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="swiper-pagination" slot="pagination"></div>
            </div>

            {/*<!--横向滚动-->*/}
            <div className="BSa-tter-G">
              <ul className="product_list float_clear">
                <li className="product_item">
                  <img src=""/>
                  <div className="product_item_text">11111111</div>
                  <div className="product_item_opcit">2222222222222</div>
                </li>
              </ul>
            </div>

            <Grey/>
            {/*<!--为你推荐-->*/}
            <div v-if="data">
              <div className="one">
                <div className="title">dddd</div>
                <img v-lazy=""/>
                <div className="title-text">
                  <span className="title-text-left">dddd</span>
                  <span className="title-text-right">33元起</span>
                </div>
                <div className="title-text-bottom">222</div>
              </div>
              <div className="two">
                <div className="two_text">
                  <div className="two_text1 ellipsis">222</div>
                  <div className="two_text2 ellipsis">222</div>
                </div>
                <img v-lazy="data.Item[1].picUrl"/>
              </div>
              <div className="two">
                <div className="two_text">
                  <div className="two_text1 ellipsis">222</div>
                  <div className="two_text2 ellipsis">222</div>
                </div>
                <img v-lazy="data.Item[2].picUrl"/>
              </div>


            </div>

            <Grey/>
            {/*<!--十点一刻-->*/}
            <div>
              <div className="product">
                <div className="straight_title">十点一刻</div>
              </div>
              <div className="BSa-tter">
                <ul className="product_list float_clear">
                  <li className="product_item" v-for="(item,index) in data"
                      key="index">
                    <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png"/>
                    <div className="product_item_text">
                      <div className="item_text0">--今日话题--</div>
                      <div className="ellipsis item_text1">3333</div>
                      <div className="ellipsis item_text2">2</div>
                      <div className="item_text3">0人参与话题</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <Grey/>

           {/* <div v-if="data">
              <div class="one">
                <div class="title">{{data.name}}</div>
                <img v-lazy="data.Item[0].picUrl"/>
                <div class="title-text">
                  <span class="title-text-left">{{data.Item[0].title}}</span>
                  <span class="title-text-right">{{data.Item[0].priceInfo}}元起</span>
                </div>
                <div class="title-text-bottom">{{data.Item[0].subTitle}}</div>
              </div>
              <div class="two">
                <div class="two_text" >
                  <div class="two_text1 ellipsis">{{data.Item[1].title}}</div>
                  <div class="two_text2 ellipsis">{{data.Item[1].subTitle}}</div>
                </div>
                <img v-lazy="data.Item[1].picUrl"/>
              </div>
              <div class="two">
                <div class="two_text" >
                  <div class="two_text1 ellipsis">{{data.Item[2].title}}</div>
                  <div class="two_text2 ellipsis">{{data.Item[2].subTitle}}</div>
                </div>
                <img v-lazy="data.Item[2].picUrl"/>
              </div>




            </div>*/}

            <Grey/>
            {/*<!--严选LOOK-->*/}
            <div className="xy-look" >
              <div className="xy-look-title">严选LOOK</div>
              <img v-lazy=""/>
              <div className="xy-look-head">
                <img v-lazy=""/>
                <span>333</span>
              </div>
              <p>pppp</p>
            </div>

            {/*<!--更多精彩-->*/}
            <div className="More">
              <div className="More-title">
                <span>更多精彩</span>
                <div className="More-title-line"></div>
              </div>
              <div className="More-content">
                <img v-lazy="item.itemPicUrl"/>
                <div><span>dddd</span></div>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
