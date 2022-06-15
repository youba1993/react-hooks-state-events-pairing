import React from "react";

function Comment({item}){
    return (
        <>
           <h5>{item.user} </h5>
           <p>{item.comment}</p> 
        </>
    )
}

export default Comment;
