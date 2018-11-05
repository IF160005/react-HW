import React from 'react';
import {getImageUrl} from "../../config";

export default class Link extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {
            genre: {
                id,
                name,
            },
            loadGenre: loadGenre,
        } = this.props;

        return (

                <button onClick={()=>{loadGenre(id)}} type="button" className="btn btn-primary">{name}</button>


        );
    }
}
