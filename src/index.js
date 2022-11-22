
import React from "react"
// React 18版前要這麼寫
// import ReactDOM from 'react-dom'
// ReactDOM.render(<App></App>,document.getElementById("root"))


import App from "./01-base/04-組件樣式"

// React 18版後要這麼寫
import  createRoot  from 'react-dom/client';
const root = createRoot(document.getElementById("root"));

root.render(<App tab="home" />);

// ReactDOM.render(<div>
//     <b>1111111</b>
//     <ul>
//         <li>111</li>
//         <li>111</li>
//         <li>111</li>
//         <li>111</li>
//     </ul>
//     </div>,document.getElementById("root"))

// ReactDOM.render(React.createElement("div",{
//     id:"aaa",
//     class:"bbb"
// },"11111111"),document.getElementById("root"))