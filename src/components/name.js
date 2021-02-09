import React from 'react';

// Old way of writing JS Code
// function Name(){
//     return "Mursal Furqan"
// }

// New aka. Arrow Function
const Name = (props) => {
    return (<span>{props.name}</span>)  ;
}   

export default Name;