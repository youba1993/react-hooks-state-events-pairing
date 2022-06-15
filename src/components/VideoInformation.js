import React, { useState } from "react";
import VideoComments from "./VideoComments";

function VideoInformation({video}){
    const [thumbsdown , setThumbsDown] = useState(video.downvotes);
    const [thumbsUp, setThumbsUp] = useState(video.upvotes);
    const [showDiv, setShowDiv] = useState(false);

    function hanldeThumbsUp(){
        setThumbsUp(thumbsUp + 1)
    }
    function handleThumbsDown(){
        setThumbsDown(thumbsdown + 1)
    }
 
    function handleDiv(){
        setShowDiv(!showDiv)
        if (showDiv === true) console.log("1");
        console.log("0");    
    }
    
    return (
        <div>
            <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <p>{video.views} views | Uploaded {video.createdAt}</p>
            <button onClick={hanldeThumbsUp}>{thumbsUp}  &#128077;</button>
            <button onClick={handleThumbsDown}>{thumbsdown}  &#128078;</button>
            <br></br>
            <button onClick={handleDiv} >{showDiv ? "Hide" : "Show"} Comments</button>
            <br></br>
            <br></br>
            {showDiv ? <VideoComments comment={video.comments}/> : null}
            
        </div>
    )
}

export default VideoInformation;