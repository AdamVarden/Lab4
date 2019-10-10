import React from 'react';
import '../App.css';
import Movies from './movies';
import Axios from 'axios';


class Read extends React.Component {
 
    state = {
        movies : []
    };
    componentDidMount()
    {
      //Request
        Axios.get('https://jsonblob.com/api/jsonblob/090d3cd5-e03d-11e9-a2ce-89c479f14772')
        //Response
        .then((response)=> {
          this.setState({movies: response.data.Search})
        })
        //If there is an error
        .catch((error)=>{
          console.log(error);
        });

    }
 
    render(){
    return (
      <div className="App">
      <h3 >Read component</h3>

        <Movies myMovies={this.state.movies}></Movies>
        
      </div>
    );
  }
}
export default Read;
