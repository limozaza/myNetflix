import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const VideoListItem = (props) => {

    return(
        <li className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <img height="100px" width="100px" className="media-object img-rounded" src={`${IMAGE_BASE_URL}${props.movie.poster_path}`} /> 
                </div>
                <div className="media-body">
                    <h5 className="title-list-item">{props.movie.title}</h5>
                </div>
            </div>
        </li>
    ); 

};

export default VideoListItem;