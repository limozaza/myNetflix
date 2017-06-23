import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const VideoListItem = (props) => {

    return(
        <li>
            <img height="100px" width="100px" src={`${IMAGE_BASE_URL}${props.movie.poster_path}`} />    
            <h3>{props.movie.title}</h3>
        </li>
    ); 

};

export default VideoListItem;