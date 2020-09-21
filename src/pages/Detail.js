import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackButton } from '../components/BackButton';

const API_KEY = '30268e86'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fetchMovie ({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            console.log({movie})
            this.setState({movie})
        })
    }

    componentDidMount () {
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchMovie({id})
    }

    render() {
        const { Title, Poster, Actors, Awards, Metascore, Plot } =
        this.state.movie
        return(
            <div>
                <BackButton />
                <h1>{Title}</h1>
                <img alt="" src={Poster} />
                <h2>ACTORES</h2>
                <h3>{Actors}</h3>
                <br></br>
                <h2>PREMIOS</h2>
                <p>{Awards}</p>
                <br></br>
                <h2>METACRITIC</h2>
                <span>{Metascore}</span>
                <br></br>
                <h2>TRAMA</h2>
                <p>{Plot}</p>
            </div>
        )
    }
}