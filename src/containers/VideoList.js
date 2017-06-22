import React from 'react';

import VideoListItem from '../components/VideoListItem';

const VideoList = () => {

    const movies = ['film1','film2','film3','film4','film5']
    return (
        <ul>
            <VideoListItem movie={movies[0]}/>
            <VideoListItem movie={movies[1]}/>
            <VideoListItem movie={movies[2]}/>
            <VideoListItem movie={movies[3]}/>
            <VideoListItem movie={movies[4]}/>
        </ul>
    );

};

export default VideoList;