import React, { useState, useEffect } from 'react';
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
    <div>The Weather is {props.season}</div>
  )
}
const Lakers = (props) => {
  return (
    <div>
      The Weather is {props.season}
    </div>
  )
}

const FetchGithubUsers = ({ userName }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);
  if (data) {
    return <div>
      UserName: {data.login}<br/>
      Avatar_url: <img src={data.avatar_url} /><br/>
      
      url: {data.url}<br/>
      Name: {data.name}<br/>
      Company: {data.company}<br/>
      Location: {data.location}<br/>
      Bio: {data.bio}

      </div>
  }
  return null;
}
const App = (props) => {
  // const [val, setVal] = useState("");
  // const [val2, setVal2] = useState("");
  // useEffect(() => { console.log(`field 1: ${val}`) }, [val]);
  // useEffect(() => { console.log(`field 2: ${val2}`) }, [val2]);
  // const [checked, setChecked] = useState(false);
  // const [manager, setManager] = useState("John Paul");
  // const [status, setStatus] = useState("Closed");
  return (
    <>
       {/* <label>Favourite Phrase: <input value={val} onChange={e => setVal(e.target.value)} /></label><br></br>
       <label>Second Favourite Phrase: <input value={val2} onChange={e => setVal2(e.target.value)} /></label>
       <h1><input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />{checked ? "Checked" : "Not Checked"}</h1>
       <div>
         The App Manager is {manager}<br></br>
         The App is {status}
         {props.reason === "good" ? <Weather season="cold" /> : <Lakers season="hot" />}
         <button onClick={() => setStatus("Open")}>Open</button>
         <button onClick={() => setStatus("Closed")}>Close</button>
         <button onClick={() => setManager("Kpantey")}>Change Manager</button>
      </div> */}
        <label>
          <h1>User Data</h1>
          <>
          <FetchGithubUsers userName="Jpbroadvision" />
          </>
        </label>
    </>
  )
}
ReactDOM.render(<App reason="bad" />, document.querySelector('#root'))