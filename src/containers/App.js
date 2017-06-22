import React,{Component} from 'react';
import axios from 'axios';

import SearchBar from "../components/SearchBar";
import VideoList from "../containers/VideoList";
import VideoDetail from "../components/VideoDetail";



const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&"
                            +"sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=8bad2808f7fc5436df90eccd5aef1541";

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            movieList : {},
            currentMovie : {}
        };
    }

    componentWillMount(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then((resp)=>{
            console.log(resp);
            this.setState({
                movieList: resp.data.results.slice(1,6),
                currentMovie: resp.data.results[0]
            })
        });


    }

    render(){
        return(
                <div>
                    <SearchBar/>
                    <VideoList />
                    <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
                </div>
            );
    }
}

export default App;