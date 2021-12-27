import React, { Switch } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
//COMPONENTS
import Home from './components/home';
import Post from './components/post';
import PostItem from './components/post_items';
import Profile from './components/profile';

const App = () => {
  return (
    <Router>
      <div>
        {/* <header>

          <Link to='/post'>Post</Link><br/>
          <Link to='/profile'>Profile</Link>
        </header> */}
   
        <Routes>
      {/* <Switch> */}
          <Route path="/post" component={Post}/>
          <Route path="/post/:id" component={PostItem}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/" component={Home}/>
          <Route render={()=> <h1>Oops 404</h1>}/>
      {/* </Switch> */}
        </Routes>
        </div>
    </Router>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))