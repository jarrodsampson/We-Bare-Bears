import React, { Component } from 'react';


class Game extends Component {

    render () {
        return (
            <div className="col l4 m4 s12">
                <p>{this.props.title}</p>
                <p>
                    <a href={this.props.link} target="_blank">
                        <img className="gamesImg" src={"images/games/" + this.props.image} alt={this.props.title} />
                    </a>
                </p>
                <p>{this.props.description}</p>
            </div>
        );
    }

}

export default Game;