import React, {Component} from "react"
import reactDom from "react-dom"
import JSON from './db.json'
//COMPNENTS
import Header from "./components/header"
import NewsList from "./components/news_list"
class App extends Component {
  state = {
    news : JSON
  }
  render(){
  return (
    <div>
      <Header/>
      <NewsList news={this.state.news}/>
    </div>
  )
  }
}

reactDom.render(<App/>, document.querySelector('#root'))