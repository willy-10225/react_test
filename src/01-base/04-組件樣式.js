import React, { Component } from 'react'
import './css/01-index.css' //導入css  模塊 webpack的支持 
// 快捷rcc
// 運算和條件式用法
// 樣式

export default class App extends Component {
  render() {
    var myname = "kerwin"
    var obj={
        background:"yellow",
        fontSize:"30px"
    }
    return (
      <div>
        
        {10+20}-{myname}

        {10>20?"aaa":"bbb"}

        <div style={obj}>111111111111111</div>
        <div style={{background:"red"}}>2222222222</div>
        <div className='active'>3333333333</div>
        <div id='my'>44444444</div>
        <label htmlFor="username">用戶名: </label>
        <input type="test" id="username"></input>

      </div>
    )
  }
}
