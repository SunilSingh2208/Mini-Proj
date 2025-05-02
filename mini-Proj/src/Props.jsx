// import React from 'react';

function Demo(props){
    return(
        <p>{props.val} is my fav colour</p>
    )
}

export default function Props(){
    return(
        <><h1>This is my favourite colour...</h1>
        <Demo val='Red'/></>
    )
}

