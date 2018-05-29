import React, { Component } from 'react';
import axios from 'axios';

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        axios.get(`http://api.tvmaze.com/shows/${this.props.match.params.id}?embed=episodes`)
            .then((response) => this.setState({ show: response.data }))
    }
    render() {
        const { show } = this.state;
        console.log(show)
        return (
            <div>
                {show === null && <p>Lading..</p>}
                {show !== null &&
                    <div className="media">
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">{show.name}</h5>
                            {show.summary}<br/>
                            <p>Rating: {show.rating.average}</p>
                            <a href={`https://imdb.com/title/${show.externals.imdb}`} target="blank" className="card-link">IMDB</a>
                            <a href={show.officialSite} target="blank" className="card-link">Official Site</a>
                        </div>
                        <img className="ml-3" src={show.image.medium} alt={show.name} />

                    </div>
                    
                }
            </div>


        )
    }
}

export default SingleSeries;