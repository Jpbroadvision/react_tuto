import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
//COMPONENTS
import Home from './components/home';
import Post from './components/post';
import Profile from './components/profile';

const App = () =>{

  return(
    <div>
      <BrowserRouter>
      <Route path='/home' component = {Home}/>
      <Route path='/posts' component = {Post}/>
      <Route path='/profile' component = {Profile}/>
      </BrowserRouter>
    </div>
  )
}
ReactDOM.render(<App/>, document.querySelector('#root'))