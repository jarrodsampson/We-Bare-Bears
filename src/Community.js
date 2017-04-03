import React, { Component } from 'react';
import Moment from 'react-moment';


class Community extends Component {

    render () {
        let art = null;
        if (this.props.image === 'self') {
            art = "images/filler.png";
        } else {
            art = this.props.image;
        }

        return (
            <div className="col l3 m6 s6">
            <div className="card z-depth-3">
                        <a href={"https://reddit.com/" + this.props.permalink} target="_blank">
                        <div className="card-image">
                          <img src={art} alt={this.props.title} />
                          <span className="card-title truncate">{this.props.title}</span>
                        </div>
                        </a>
                        <div className="card-content">
                          <strong>{this.props.author}</strong> <br />
                                                  <Moment unix fromNow>{this.props.time}</Moment>
                        </div>
                        <div className="card-action">
                          <a href={"https://reddit.com/" + this.props.permalink} target="_blank">View Full</a>
                        </div>
            </div>
            </div>


        );
    }

}

export default Community;