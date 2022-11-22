


// class Test{
//     constructor(){
//         this.a=1;
//     }
//     testa(){
//         console.log("testa")
//     }
    
// }


// class childTest extends Test{
//     testb(){
//         console.log("testb")
//     }
// }

// var obj=new childTest()
// obj.testa()
// console.log(obj.a)

import React from "react";
class App extends React.Component{
    render(){
        return (
        <section>
            hello react Component
            <ul>
                <li>1111</li>
                <li>2222</li>
            </ul>
            <div>新的內容111</div>
            <div>新的內容22222</div>
        </section>
        )
    }
}

export default App