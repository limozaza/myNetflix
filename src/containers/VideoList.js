import React from 'react';

import VideoListItem from '../components/VideoListItem';

const VideoList = (props) => {

    return (
        <ul>
            {
                props.movieList.map((movie) => {
                    return <VideoListItem movie={movie} key={movie.id} movieSelect={movieSelect}/>
                })
            }
            
        </ul>
    );

    function movieSelect(m){
        props.movieSelect(m);
    }

};

export default VideoList;