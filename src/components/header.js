import React from "react";

const getYear = () =>{
    const newDate = new Date();
    return newDate.getFullYear();

}
const Header = () =>{
    return <div>The date year is now {getYear()}</div>
}

export default Header;