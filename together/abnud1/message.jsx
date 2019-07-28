import React from "react";
import {render} from "react-dom";
function Message(props){
    return (
        <p>{props.message}</p>
    )
} 

render(<Message message="Github is for everyone!"/>,document.getElementById("root"));