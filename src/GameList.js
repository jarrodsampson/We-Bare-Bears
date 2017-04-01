import React, { Component } from 'react';

import Game from './Game.js';

class GameList extends Component {

    render () {
        var gameList = this.props.data.map(function(game) {
            //console.log(girl);
            return (
                <Game
                    link={game.link}
                    title={game.title}
                    image={game.image}
                    description={game.description}
                    key={game.title}
                />
            );
        }, this);
        return (
            <div className="gameList">
                {gameList}
            </div>
        );
    }

}

export default GameList;