import React from "react"
import reactDom from "react-dom"
const App = () =>{
  return (
    <div>
      <p>Hello Change <br></br> Welcome to the world of react</p>
    </div>
  )
}

reactDom.render(<App/>, document.querySelector('#root'))