//ES5
// import React from "react"; 
import React from "react"; 

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
const Header = (props) => {
        return (
            <header>
                <div className="logo" >Logo</div>
                <input type="text" onChange={props.keywords}/>
                <p className="anser"></p>
            </header>
        )

    }
export default Header;