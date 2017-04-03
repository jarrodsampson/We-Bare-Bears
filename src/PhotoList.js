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
                <OwlCarousel slideSpeed={300} items={2} itemsTablet={[1125,2]} itemsMobile={[700,1]} stopOnHover={true} lazyLoad={true} autoPlay={true} singleItem={false}>
                    {photoList}
                </OwlCarousel>
            </div>
        );
    }

}

export default PhotoList;