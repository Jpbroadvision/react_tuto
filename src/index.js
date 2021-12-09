import React from "react"
import reactDom from "react-dom"
//COMPNENTS
import Header from "./components/header"
const App = () =>{
  return (
    <div>
      <Header/>
    </div>
  )
}

reactDom.render(<App/>, document.querySelector('#root'))