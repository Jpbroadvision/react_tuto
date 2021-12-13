//ES5
// import React from "react"; 
import React, {Component} from "react"; 

// const getYear = () => {
//     const newDate = new Date();
//     return newDate.getFullYear();

// }
// from ES5
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 The date year is now {getYear()}
//             </div>
//         )

//     }
// }
//from ES6
class Header extends Component {
    state = {
        active: false,
        keywords:"hello"}
    inputOnchangeHandler = (event) =>{
        const value = event.target.value ===''? false:true;

        // document.querySelector(".anser").innerHTML =`Hello ${event.target.value}`;
    this.setState({
        active: value,
        keywords: event.target.value
    })
    }
    render() {
        console.log(this.state.keywords);
        return (
            <header style={{background:`${this.state.active ?'red':'blue'}`}}>
                <div className="logo" >Logo</div>
                <input type="text" onChange={this.inputOnchangeHandler}/>
                <p className="anser"></p>
            </header>
        )

    }
}
export default Header;