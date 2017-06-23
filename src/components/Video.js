import React from 'react';
const BASE_URL="https://www.youtube.com/embed/";

const Video = (props) => {
    return(
        <div>
            <iframe src={`${BASE_URL}${props.videoId}`} />
        </div>
    );
}

export default Video;