
import React, {useState} from "react";

function Pages(props){
    return (
        <div>
            <h1>{props.data[props.page].title}</h1>
            <p>{props.data[props.page].description}</p>
        </div>
    )
}

export default Pages