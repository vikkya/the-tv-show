import React, {Component} from 'react';
import axios from 'axios';
import SeriesList from '../../Components/SeriesList'

class Series extends Component{
    state = {
        series: [],
        seriesName: '',
        isFetching: false
      };
    

      onInputChange = e => {
          this.setState({seriesName: e.target.value, isFetching: true})
        axios.get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response) => {this.setState({series: response.data, isFetching: false })})
        }

    render(){
        const {series, seriesName, isFetching} = this.state;
        return(
           <div>The length of the series is {this.state.series.length}
           <div>
           <input type="text" value={seriesName} onChange={this.onInputChange} />
              
           </div>
           {!isFetching && series.length === 0 && seriesName.trim() === '' &&
               <p>Please Enter your favorite show name</p> }
               {!isFetching && series.length === 0 && seriesName.trim() !== '' &&
               <p>No Show is found</p> }
               {isFetching && <p>Loading...</p>}
               { !isFetching && 
                     <SeriesList list={this.state.series} />
               }
           </div>
        )
    }
}

export default Series;