import React, { Component } from 'react';

import Bear from './Bears.js';

class BearList extends Component {

    showBearDetail (i) {
        this.props.onShowBearDetail(i);
        //console.log("follow", i);
    }

    render () {
        var bearList = this.props.data.map(function(bear) {
            //console.log(girl);
            return (
                <Bear
                    name={bear.name}
                    image={bear.image}
                    description={bear.description}
                    mainBg={bear.big}
                    key={bear.name}
                    onClick={this.showBearDetail.bind(this, bear)}
                />
            );
        }, this);
        return (
            <div className="bearList">
                {bearList}
            </div>
        );
    }

}


export default BearList;