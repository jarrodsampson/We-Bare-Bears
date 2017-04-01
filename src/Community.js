import React, { Component } from 'react';
import Moment from 'react-moment';


class Community extends Component {

    render () {
        let art = null;
        if (this.props.image === 'self') {
            art = "images/power.png";
        } else {
            art = this.props.image;
        }

        return (
            <div className="z-depth-3 community col s12">

                <div className="col l3 m3 s12">
                    <p>
                        <img src={art} alt={this.props.title} />
                    </p>
                </div>
                <div className="col l9 m9 s12 left-align">
                    <p className="title truncate">{this.props.title}</p>
                    <p>
                        <strong>{this.props.author}</strong>
                        <Moment unix fromNow>{this.props.time}</Moment>
                        <a href={"https://reddit.com/" + this.props.permalink} target="_blank">View Full</a>
                    </p>

                </div>
            </div>
        );
    }

}

export default Community;