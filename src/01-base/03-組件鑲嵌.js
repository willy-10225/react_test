import React, { Component } from 'react'

class Child  extends Component{
    render(){
        return <div>Child</div>
    }
}

class Navbar extends Component{
    render(){
        return <div> navbar
            <Child></Child>
        </div>
    }
}

function Swiper(){
    return <div>swiper</div>
}

const Tabber = () => <div>tabber</div>


//快捷碼 rcc
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
            
        </Navbar>
        <Swiper></Swiper>
        <Tabber></Tabber>
        
      </div>
    )
  }
}


