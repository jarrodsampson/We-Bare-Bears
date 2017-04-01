import React, { Component } from 'react';

import './css/animate.css';
import './css/lightbox.min.css';
import './css/main.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';

import BearList from './BearList.js';
import PhotoList from './PhotoList.js';
import CommunityList from './CommunityList.js';
import GameList from './GameList.js';

import $ from 'jquery';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bears: [],
      photos: [],
      community: [],
      games: [],
      childVisible: false,
      details: {}
    };

    this.showBearDetail = this.showBearDetail.bind(this);
  }

  loadCommentsFromServer () {

    $.when(
        $.get("//www.reddit.com/r/webarebears/new.json?limit=8"),
        $.get("/data/bears.json"),
        $.get("/data/photobooth.json"),
        $.get("/data/games.json")

    ).then(function(community, bears, photos, games) {
      console.log(community);
      this.setState({
        bears: bears[0],
        photos: photos[0],
        community: community[0].data.children,
        games: games[0],
      });
      console.log(bears[0]);
      console.log(photos[0]);
      console.log(community[0].data.children);
      console.log(games[0]);

    }.bind(this));

  }

  componentDidMount () {
    this.loadCommentsFromServer();
  }

  showBearDetail (i) {
    console.log("Back", i);
    this.setState({ childVisible: true, details: i});

    //Materialize.toast('Learn About ' + i.name + "!", 4000);
    $('html,body').animate({scrollTop: $("#bearDetailSnap").offset().top}, 1000);
  }

  render() {
    return (
      <div className="App">

        <div className="videoMain">

          <video id="self1" className="html5-video player" width="100%" loop autoPlay muted>
            <source src="" width="100%" type="video/mp4">
            </source>
          </video>

        </div>

        <div className="bearBg">
          <div className="container">

            <div className="row wow bounceInRight scrollspy" id="bears">
              <div className="col s12 center-align">
                <h1>Meet The Bears</h1>

                <div className="col l12 m12 s12 theGirlsBox">
                  <BearList data={this.state.bears} onShowBearDetail={this.showBearDetail} />
                </div>

                <div className="col s12 spacer-small" id="bearDetailSnap"></div>
              </div>
            </div>
          </div>
        </div>


        { this.state.childVisible ?

             <div className="col s12 center-align girlDetailBox fade">
                <div className="videoMain2">

                  <video id="self2" src={"media/" + this.state.details.video} className="html5-video player" width="100%" loop autoPlay muted>
                  </video>

                  <div className="aboveGirl">
                    <div className="center-align text">
                      <h2>{this.state.details.name}</h2>
                      <p><em>{this.state.details.role}</em></p>
                      <p>{this.state.details.description}</p>
                    </div>
                  </div>

                </div>
              </div>

            : null }

        <div className="col s12 spacer-small"></div>


        <div className="parallax-container">
          <div className="parallax"><img src="https://placeimg.com/1920/1080/any" alt="Banner" /></div>
        </div>

        <div className="photoBg">
          <div className="container">

            <div className="row scrollspy" id="photos">
              <div className="col s12 center-align">
                <h1>Photo Booth</h1>

                <div className="col l12 m12 s12 theGirlsBox">
                  <PhotoList data={this.state.photos} />
                </div>

                <div className="col s12 spacer-small"></div>
              </div>
            </div>
          </div>
        </div>


        <div className="summaryBg">
          <div className="container">
            <div className="wow fadeInLeft col s12 center-align scrollspy" id="About">
              <h1>About</h1>
              <p>The Powerpuff Girls series debut on November 18, 1998, was the highest rated premiere in Cartoon Network's history at the time. During its run, the series consistently scored the highest rating for an original series each week for the network across a wide range of demographics—from young children to adults.</p>

              <p>The show's last original run episode was on March 25, 2005; in all, six seasons were made. Cartoon Network had offered to give McCracken and Savino a seventh season of the series, but they believed the series had run its course.</p>
              <p>
                <a className="waves-effect waves-light btn modal-trigger orange darken-1 " href="#moreHistory">Learn More</a>
              </p>
            </div>

            <div className="col s12 spacer-small"></div>

          </div>
        </div>



        <div className="parallax-container">
          <div className="parallax"><img src="https://placeimg.com/1920/1080/any" alt="Banner" /></div>
        </div>

        <div className="communityBanner">
          <div className="container">
            <div className="row wow fadeInLeft col s12 center-align scrollspy" id="community">
              <div className="col s12 spacer-small"></div>
              <h1>The Community</h1>

              <CommunityList data={this.state.community} />

            </div>

            <div className="col s12 spacer-small"></div>

          </div>
        </div>

        <div className="gamesBg">

            <div className="row wow bounceInRight scrollspy" id="games">
              <div className="col s12 center-align">
                <h1>Games</h1>

                <div className="col l12 m12 s12 theGirlsBox">
                  <GameList data={this.state.games} />
                </div>

                <div className="col s12 spacer-small"></div>
              </div>
            </div>
        </div>



      </div>
    );
  }
}

export default App;
