import React,{Component} from 'react';
import axios from 'axios';

import SearchBar from "../components/SearchBar";
import VideoList from "../containers/VideoList";
import VideoDetail from "../components/VideoDetail";
import Video from "../components/Video";



const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&"
                            +"sort_by=popularity.desc&include_adult=false&append_to_response=images";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";                          
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
        this.initMovies();
    }
    initMovies = ()=>{
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then((response)=>{
                        this.setState(
                            {
                            movieList:response.data.results.slice(1,6),
                            currentMovie:response.data.results[0]
                        },
                        //Le state a ete mis a jour
                        ()=>{
                                this.applyVideoToCurrentMovie();   
                        });  
                });
    }

    applyVideoToCurrentMovie(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then((response)=>{
                       const youtubeKey = response.data.videos.results[0].key;
                       let newCurrentMovieState = this.state.currentMovie;
                       newCurrentMovieState.videoId = youtubeKey;
                       this.setState({
                           currentMovie: newCurrentMovieState
                       })
                });
    }
    movieSelect = (movie)=>{

        this.setState(
            {
            currentMovie: movie
            }
            ,
            ()=>{
                this.applyVideoToCurrentMovie();
            }
        );

    };
    movieSearch = (search) => {
        if(search){
            axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${search}`).then(
                (response) => {
                    if(response.data && response.data.results[0]){
                        if(response.data.results[0].id != this.state.currentMovie.id ){
                            this.setState(
                                {
                                    currentMovie: response.data.results[0]
                                },
                                ()=>{
                                    this.applyVideoToCurrentMovie();
                                }
                            );
                        }
                    }
                }
            );
        }
    }



    render(){
        const renderVideoList = () => {
            if(this.state.movieList.length >= 5){
                return <VideoList movieList={this.state.movieList} movieSelect={this.movieSelect}/>;
            }
        }
        return(
                <div>
                    <div className="row">
                        <div className="search_bar">
                            <SearchBar movieSearch={this.movieSearch}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <Video videoId={this.state.currentMovie.videoId}/>
                            <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
                        </div>
                        <div className="col-md-4">
                            {renderVideoList()}
                        </div>
                    </div>
                    
                </div>
            );
    }
}

export default App;

