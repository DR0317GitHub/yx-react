import React,{Component} from 'react';
import './home-time.css'
export default class Time extends Component {

render(){
return(
<div className="timer">
  <section className="time-left">
    <div className="time-text">严&nbsp;选&nbsp;限&nbsp;时&nbsp;购</div>
    <div className="time">
      <div>00</div>
      <span className="span1">:</span>
      <div>00</div>
      <span className="span2">:</span>
      <div>00</div>
    </div>
    <div className="time-next">下一场 22:00 开始</div>
  </section>
  <img src="http://yanxuan.nosdn.127.net/d9c864b39c9293e93ae7e721e98bf8c8.jpg?imageView&quality=85&thumbnail=330x330"/>
</div>
)
}
}












