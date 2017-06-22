import React from 'react';

import SearchBar from "../components/SearchBar";
import VideoList from "../containers/VideoList";
 
const App = () => {
    return(
        <div>
            <SearchBar/>
            <VideoList/>
        </div>
    )
}

export default App;