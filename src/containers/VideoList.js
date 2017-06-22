import React from 'react';

import VideoListItem from '../components/VideoListItem';

const VideoList = () => {

    const movies = ['film1','film2','film3','film4','film5']
    return (
        <ul>
            {
                movies.map((movie,key) => {
                    return <VideoListItem movie={movie} key={key}/>
                })
            }
            
        </ul>
    );

};

export default VideoList;