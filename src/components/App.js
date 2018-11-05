import React from 'react';
import axios from 'axios';
import Link from './Link'
import {endpoints} from '../../config';
import Card from "./Card";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieList: [],
            genresList: [],
        };

        this.requestMovies();
        this.requestGenres();
    }

    requestMovies = () => {
        axios
            .get(endpoints.mostPopularMovies())
            .then((res) => this.setMovieList(res.data.results))
            .catch((error) => console.log(error));
    };
    requestGenres = () => {
        axios
            .get(endpoints.genres())
            .then((res) => this.setGenresList(res.data.genres))
            .catch((error) => console.log(error));
    };
    requestGenreId = (id) => {
        axios
            .get(endpoints.genreMovies(id))
            .then((res) => this.setMovieList(res.data.results))
            .catch((error) => console.log(error));
    };


    setMovieList = (movieList) => {
        this.setState({
            movieList,
        })
    };
    setGenresList = (genresList) => {
        this.setState({
            genresList,
        })
    };
    loadGenre = (id) => {
        console.log(id);
      this.requestGenreId(id);
    };

render() {
        const {movieList} = this.state;
        const {genresList} = this.state;


        return (
            <div className="App">
                <div className="links">
                    {genresList.map((genre) => <Link genre={genre} loadGenre={this.loadGenre}/>)}
                </div>
                <div className="cards">
                    {movieList.map((movie) => <Card movie={movie}/>)}
                </div>
            </div>
        )
    }

}
