import React, { Component } from 'react';

import Community from './Community.js';

class CommunityList extends Component {

    render () {
        var communityList = this.props.data.map(function(community) {
            return (
                <Community
                    title={community.data.title}
                    author={community.data.author}
                    image={community.data.thumbnail}
                    permalink={community.data.permalink}
                    time={community.data.created_utc}
                    key={community.data.title}
                />
            );
        }, this);
        return (
            <div className="CommunityList">
                {communityList}
            </div>
        );
    }

}

export default CommunityList;