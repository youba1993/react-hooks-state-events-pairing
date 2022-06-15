import React from "react";
import Comment from "./Comment"

function VideoComments({comment}){
     return(
            <div style={{borderWidth:  2,  borderStyle:  'dashed'}}>
            <h3>{comment.length} Comments </h3>
            {comment.map((item)=>
             <Comment key={item.id} item={item} />
            )}
            </div>
     )
}

export default VideoComments;