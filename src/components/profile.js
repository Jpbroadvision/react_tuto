import React from "react";

const Profile = (props) => {
    const redict = ()=>{return props.history.push("/")}
    const whatToDo= "yes";
    return (
        <div>
            {whatToDo==="yes" ? "Profile": redict}
            Profile
        </div>
    )
}
export default Profile