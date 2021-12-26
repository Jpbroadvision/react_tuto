import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link, Route, Routes} from 'react-router-dom'
//COMPONENTS
import Home from './components/home';
import Post from './components/post';
import PostItem from './components/post_items';
import Profile from './components/profile';

const App = () =>{


  return(
    <Router>
        <div>
          <header>
             
            <Link to='/post'>Post</Link><br></br>
            <Link to='/profile'>Profile</Link>
          </header>
        </div>
      <Routes>
      <Route path="/" exact component ={<Home />}></Route>
      <Route path="/post" exact component ={<Post />}></Route>
      <Route path="/post/:id" exact component ={<PostItem />}></Route>
      <Route path="/profile" exact component ={<Profile />}></Route>
      </Routes>
      </Router>
  )
}
ReactDOM.render(<App/>, document.querySelector('#root'))