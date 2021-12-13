import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Home from '../src/components/home';
import POST from '../src/components/home';
import Profile from '../src/components/home';

const App = () =>{

  return(
    <div>
      <h3>Hello there</h3>
    </div>
  )
}
ReactDOM.render(<App/>, document.querySelector('#root'))