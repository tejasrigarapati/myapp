import React from 'react';
// import login from '/login';
// import home from '/home';

export default function app2(props) {
return props.user===""?(
<div>
    <input type="text" placeholder="enter name"/>
<input type="password" placeholder="enter password"/>
<button>submit</button>

<div>hello{props.user}</div>


</div> 
)
//     if (props.user===""){
//         return <login/>;
//     }
//     else{
//            return <home username={props.user}/>