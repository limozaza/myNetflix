import React from 'react';
const BASE_URL="https://www.youtube.com/embed/";

const Video = (props) => {
    return(
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`${BASE_URL}${props.videoId}`} />
        </div>
    );
}

export default Video;