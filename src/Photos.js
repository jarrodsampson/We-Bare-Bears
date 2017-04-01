import React, { Component } from 'react';

class Photo extends Component {

    render () {
        return (
            <div>
                <a href={"images/photos/" + this.props.image} data-title={this.props.description} data-lightbox="photos">
                    <img src={"images/photos/" + this.props.image} alt="Photos" />
                    <div className="titleIt">
                        <p>{this.props.description}</p>
                    </div>
                </a>
            </div>
        );
    }

}

export default Photo;