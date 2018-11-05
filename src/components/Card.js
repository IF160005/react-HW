import React from 'react';
import { getImageUrl } from '../../config';

export default class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            opened: false,
            liked: true,

    }}

    toggleSummary = () => {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
        });
    };
    setLiked = () => {
        const { liked } = this.state;
        this.setState({
            liked: !liked,
        });
    };

    render() {
        const {
            movie: {
                backdrop_path,
                original_title,
                overview,
                release_date,
                vote_average,
                vote_count,
                id,
            },

        } = this.props;
        const { opened } = this.state;
        const {liked}=this.state;

        return (
            <div className="card">
                <div
                    className="card__image"
                    style={{ backgroundImage: `url(${getImageUrl(backdrop_path)})` }}
                />

                <div className="card__title">
                    {original_title}
                </div>

                <div className="card__like " onClick={this.setLiked}>
                    {liked
                        ? <i className="fa fa-heart-o"/>
                        : <i className="fa fa-heart"/>
                    }
                </div>

                <div className="card__subtitle">
                    <span>{release_date}</span>
                    <span>{vote_average} ({vote_count} votes)</span>
                </div>

                <div className="card-info">
                    <div className="card-info__header" onClick={this.toggleSummary}>
                        Summary
                    </div>

                    {opened
                        ? <div className="card-info__description">{overview}</div>
                        : null
                    }

                </div>
            </div>
        );
    }
}
