/*
用户主页的路由组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import './home.css'
import BScroll from "better-scroll"
import {getTagList1, getDataHome1} from "../../redux/actions";




import Shuffling from '../../components/home-shuffling/home-shuffling'
import Grey from '../../components/grey/grey'
import Masklayer from '../../components/home-masklayer/home-masklayer'
import Product from '../../components/home-product/home-product'
import SenTiment from '../../components/home-tenTiment/home-tenTiment'
import Time from '../../components/home-time/home-time'
import Select from '../../components/home-select/home-select'


class Home extends Component {
  state = {
    currentIndex: 0
  }

  //获取函数
  componentWillMount() {
    this.props.getDataHome1()
    this.props.getTagList1()
  }

  componentDidUpdate() {
    if (this.refs.topScroll) {
      new BScroll(this.refs.topScroll, {
        click: true,
        scrollY: true,
        eventPassthrough: "viewport"
      })
      if (!this.scroll) {
        this.scroll = new BScroll(this.refs.goodsList, {
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: "viewport"
        })
      }
      this.bscrolls = new BScroll(this.refs.maod, {
        click: true,
        scrollY: true,
      })

    } else {
      return
    }
  }

  goToTop = (x, y) => {
    console.log('-------------',  this.bscrolls)
    this.bscrolls.scrollTo(x, y)
  }


  changeIndex = (index) => {
    this.setState({
      currentIndex: index
    })
  }

  render() {
    console.log(dataHome)
    const {dataHome, tagList} = this.props
    if (!dataHome.dataHome || !tagList[0]) {
      return <div></div>
    }
    return (
      <div className="div">
        <Masklayer/>
        <header>
          <div className="header_input">
            <img
              src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png"
              alt="网易优选"/>
            <i className="iconfont icon-search3"></i>
            <input type="text" placeholder="搜索商品,共9789款好物"/>
          </div>
          <div className="betterScroll" ref="goodsList">
            <ul className="ellipsis">
              {
                dataHome.dataHome.map((item, index) => (
                    <li key={index}
                        className={this.state.currentIndex === index ? "fenlei_content on" : "fenlei_content"}
                        onClick={() => this.changeIndex(index)}
                    >{item.name}</li>
                  )
                )
              }
            </ul>
          </div>
        </header>
        <div className="maoD" ref="maod">
          <a href="javaScript:;" onClick={() => this.goToTop(0, 0)}>
            <div>
              <i className="iconfont icon-arrowup"></i>
            </div>
          </a>
        </div>
        <div className="viewport" ref="topScroll">
          <div className="content">
            {/*<!--轮播图-->*/}
            <Shuffling/>
            {/*<!--保障承诺-->*/}
            <section className="security">
              <li className="security_li">
                <i className="iconfont"/>
                <span>网易自营品牌</span>
              </li>
              <li className="security_li">
                <img src="../../assets/images/new.png"/>
                <span>30天无忧退货</span>
              </li>
              <li className="security_li">
                <img src="../../assets/images/new.png"/>
                <span>48小时快速退款</span>
              </li>
            </section>
            <Grey/>
            {/*<!--品牌直供-->*/}
            <section className="straight">
              <div className="straight_title">
                <span>品牌制造商直供</span>
                <i className="iconfont icon-youjiantou"></i>
              </div>
              <ul className="straight_conent float_clear">
                {
                  tagList.slice(0, 4).map((item, index) => (
                    <li key={index}>
                      <div className="straight_conent_text">
                        <h4>{item.name}</h4>
                        <span>{item.floorPrice}元起</span>
                      </div>
                      <img className="img" src={item.picUrl}/>
                    </li>
                  ))
                }


              </ul>
            </section>

            <Grey/>
            {/* <!--新品发布-->*/}
            <Product/>
            <Grey/>
            {/*<!--人气首发-->*/}
            <SenTiment/>
            <Grey/>

            {/*<!--定时器-->*/}
            <Time/>

            <Grey/>

            <div className="welfare">
              <img src="//yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg"/>
            </div>

            <Grey/>
            {/*<!--专题精选-->*/}
            <Select/>

            <Grey style="margin-top: 60px"/>
            {/*<!--更多好物-->*/}
            <div className="straight">
              <div className="straight_title">
                <div className="grey"></div>
                {
                  dataHome.dataHome.map((dataA, index) => (
                    <ul className="straight_conent float_clear" key={index}>
                      <span>{dataA.name}好物</span>
                      {

                        dataA.itemList.map((item, index1) => (
                          <li key={index1}>
                            <img src={item.listPicUrl}/>
                            <div className="ellipsis straight_conent_info">{item.simpleDesc}</div>
                            <div className="straight_conent_text">
                              <div className="ellipsis">{item.name}</div>
                              <div className="ellipsis many">¥{item.retailPrice}</div>
                            </div>
                          </li>

                        ))
                      }
                    </ul>
                  ))
                }
              </div>
            </div>

            <Grey/>
            {/*<!--底部-->*/}
            <div className="foot">
              <div className="foot-content">
                <span>下载APP</span>
                <span>电脑版</span>
                <div className="foot-content-text1">网易公司版权所有 &copy; 1997-2018</div>
                <div className="foot-content-text1">s食品经营许可证:JK13301080111719</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default connect(
  state => ({dataHome: state.dataHome, tagList: state.tagList}),
  {getDataHome1, getTagList1}
)(Home)