/*
*       <!--轮播图-->
* */

import React, {Component} from 'react'
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import './home-shuffling.css'

export default class Shuffling extends Component {

  componentDidMount() {
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
  }

  render() {
    return (

      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/8f283dd0ad76bb48ef9c29a04690816a.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/bbdb08081ec7938fcd738994d5981c18.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/58568bc29efac66da5419b040abe990c.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/a9e80a3516c99ce550c7b5574973c22f.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/11b673687ae33f87168cc7b93250c331.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/ed14da36343329e354641bb7f15c2ace.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/747785a0bf89164e13c570f77d36957b.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/543f496b9806b4ad33bbd985ba8dd56c.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </a>
          </div>
        </div>
        <div className="swiper-pagination" slot="pagination"></div>
      </div>
    )
  }
}
