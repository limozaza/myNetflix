import React,{Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchText: "",
            placeHolder:"Tapez votre film"
        }
    }

    handleChange = (e) =>{
        this.setState({
            searchText: e.target.value
        })
    };

    handleRecherche = (e) =>{
        this.props.movieSearch(this.state.searchText);
    };

    render(){
        return(
            <div className="row">
                <div className="col-md-8 input-group">
                    <input type="text" className="form-control input-lg" onChange={e => this.handleChange(e)} placeholder={this.state.placeHolder}/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={(e)=>this.handleRecherche(e)}>Recherche</button>
                    </span>
                </div>
            </div>
                
            );
    }
}


export default SearchBar;