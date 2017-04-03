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
    console.log(i.big);

    //Materialize.toast('Learn About ' + i.name + "!", 4000);
    $('html,body').animate({scrollTop: $("#bearDetailSnap").offset().top}, 1000);
  }

  render() {
    return (
      <div className="App">

        <div className="videoMain">

          <video id="self1" className="html5-video player" width="100%" loop="true" autoPlay="true" muted>
            <source src="media/main.mp4" width="100%" type="video/mp4">
            </source>
          </video>

        </div>

        <div className="bearBg">
          <div className="containerLarge">

            <div className="row wow bounceInRight scrollspy" id="bears">
              <div className="col s12 center-align">
                <div className="col s12 spacer-small"></div>
                <h1>Meet The Bears</h1>
                <div className="col s12 spacer-x-small"></div>

                <div className="col l12 m12 s12 theGirlsBox">
                  <BearList data={this.state.bears} onShowBearDetail={this.showBearDetail} />
                </div>

                <div className="col s12 spacer-small" id="bearDetailSnap"></div>
              </div>
            </div>
          </div>
        </div>


        { this.state.childVisible ?

             <div className="col s12 center-align bearDetailBox fade">
                    <div className="videoMain2">
                      <img id="self2" src={"images/" + this.state.details.big} className="" alt="Bear Detail" />
                    </div>

                      <div className="aboveGirl">
                        <div className="center-align text">
                          <h2>{this.state.details.name}</h2>
                          <p><em>{this.state.details.role}</em></p>
                          <p>{this.state.details.description}</p>
                        </div>
                      </div>


                <div className="col s12 spacer-small"></div>
              </div>

            : null }




        <div className="parallax-container">
          <div className="parallax"><img src="images/art1.jpg" alt="Banner" /></div>
          <h2>On The Lookout</h2>
        </div>

        <div className="photoBg">


            <div className="row scrollspy" id="photos">
              <div className="col s12 center-align no-padding">
              <div className="col s12 spacer-small"></div>
                <h1>Photo Booth</h1>
                <div className="col s12 spacer-x-small"></div>
                <div className="col l12 m12 s12 no-padding">
                  <PhotoList data={this.state.photos} />
                </div>

              </div>
            </div>
        </div>


        <div className="summaryBg">
          <div className="container">
            <div className="wow fadeInLeft col s12 center-align scrollspy" id="About">
                <div className="col s12 spacer-small"></div>
              <h1>About</h1>

              <p>
                We Bare Bears follows three adoptive bear brothers: Grizzly, Panda and Ice Bear. The bears attempt to integrate with human society, such as by purchasing food, making human companions or trying to become famous on the Internet, although these attempts see the bears struggle to do so due to the civilized nature of humans and their own animal instincts. However, in the end, they figure out that they have each other for support. One notable aspect of the show's humor is the bears' ability to form a "bear stack". As its name implies, the bears stack on top of each other, which serves as their unique way of transportation.
              </p>
              <p>
                <a className="waves-effect waves-light btn modal-trigger orange darken-1 " href="https://en.wikipedia.org/wiki/We_Bare_Bears" target="_blank">Learn More</a>
              </p>
            </div>

            <div className="col s12 spacer-small"></div>

          </div>
        </div>



        <div className="parallax-container">
          <div className="parallax"><img src="images/art2.jpg" alt="Banner" /></div>
          <h2>Season 2 This April!</h2>
        </div>

        <div className="communityBg">
            <div className="row wow fadeInLeft col s12 center-align scrollspy" id="community">
              <div className="col s12 spacer-small"></div>
              <h1>The Community</h1>

              <CommunityList data={this.state.community} />

              <div className="col s12 spacer-small"></div>

            </div>
        </div>

        <div className="gamesBg">

            <div className="row wow bounceInRight scrollspy" id="games">
              <div className="col s12 center-align">
                <h1>Games</h1>

                <div className="col l12 m12 s12">
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
