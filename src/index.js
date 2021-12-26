import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router,Link, Route, Routes} from 'react-router-dom'
// //COMPONENTS
// import Home from './components/home';
// import Post from './components/post';
// import PostItem from './components/post_items';
// import Profile from './components/profile';

// const lakeList = [
//   { id: "1", name: "Maud Lake", trailhead: "Maud" },
//   { id: "2", name: "Echo Lake", trailhead: "Echo" },
//   { id: "3", name: "Cascade Lake", trailhead: "Cascade" }
// ];

const Weather = (props) => {
  return (
    <div>The Weather is { props.season }</div>
  )
}
const Lakers = (props) => {
  return (
    <div>
      The Weather is {props.season}
    </div>
  )
}
const App = (props) => {
  const [manager, setManager] = useState("John Paul");
  const [status, setStatus] = useState("Closed");
  return (
    <>
    <div>
      The App Manager is {manager}<br></br>
      The App is {status}
      {props.reason ==="good" ? <Weather season ="cold"/>: <Lakers  season="hot"/>}
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Closed")}>Close</button>
      <button onClick={() => setManager("Kpantey")}>Change Manager</button>
    </div>
    </>
  )
}
ReactDOM.render(<App reason="bad"/>, document.querySelector('#root'))