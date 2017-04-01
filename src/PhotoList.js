import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

import Photo from './Photos.js';

class PhotoList extends Component {

    render () {
        var photoList = this.props.data.map(function(photo) {
            //console.log(fanArt);
            return (
                <Photo
                    image={photo.image}
                    description={photo.description}
                    key={photo.image}
                />
            );
        }, this);
        return (
            <div className="photoList">
                <OwlCarousel slideSpeed={300} items={4} autoPlay={true} singleItem={false}>
                    {photoList}
                </OwlCarousel>
            </div>
        );
    }

}

export default PhotoList;