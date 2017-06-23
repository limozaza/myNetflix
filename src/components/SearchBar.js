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

    render(){
        return(
            <div className="row">
                <div className="col-md-8">
                    <input type="text" className="form-control input-lg" onChange={e => this.handleChange(e)} placeholder={this.state.placeHolder}/>
                </div>
            </div>
                
            );
    }
}


export default SearchBar;