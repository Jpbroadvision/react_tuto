import React, {Component} from "react"
import reactDom from "react-dom"
import JSON from './db.json'
//COMPNENTS
import Header from "./components/header"
import NewsList from "./components/news_list"
class App extends Component {
  state = {
    news : JSON,
    results: [],
  }
  getKeyword = (event) =>{
  let keywords = event.target.value;
  let results = this.state.news.filter((result) => {
    return result.title.indexOf(keywords) > -1
  })
  // console.log(results);
  this.setState({
    // results: results
    //OR
    results
  })
  }
  render(){
  return (
    <div>
      <Header keywords={this.getKeyword}/>
      <NewsList news={this.state.results.length ===0? this.state.news : this.state.results}/>
    </div>
  )
  }
}

reactDom.render(<App/>, document.querySelector('#root'))