import React, { Component } from 'react';


class Bears extends Component {

    render () {
        return (
            <div className="col l4 m4 s12">
                <h2>{this.props.name}</h2>
                <p><img className="bears" src={"images/" + this.props.image} alt={this.props.name} onClick={ this.props.onClick } /></p>
            </div>
        );
    }

}

export default Bears;