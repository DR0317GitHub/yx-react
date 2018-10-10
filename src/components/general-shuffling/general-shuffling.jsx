/*轮播图*/
import React,{Component} from 'react';
import './general-shuffling.css'
export default class Shuffling extends Component {

  render(){
    return(
      
      <div className="swiper-container">
        <div className="swiper-wrapper" >
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
    )
  }
}











