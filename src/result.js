import React from "react";


export default function result(props) {
    if(props.marks>40){
        return "Pass";
    }
    else{
  return "Fail";
    }
    
}
