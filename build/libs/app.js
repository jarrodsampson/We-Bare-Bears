// activate menu dropdown
    $(".dropdown-button").dropdown();

    // menu side bar

    $(".button-collapse").sideNav();

    $('.parallax').parallax();

    document.getElementById('self2').pause();

    $("#audio").animate({volume: 0}, 1000);

    $(".loader").delay(100).fadeOut(1000);

    $('.scrollspy').scrollSpy();

    $('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        ready: function() {  }, // Callback for Modal open
        complete: function() {  } // Callback for Modal close
    });


    var app = angular.module("PowerApp", ['ngAnimate','angularMoment']); // module init
    app.controller("MainController", function($scope, $http, $q) { // controller init

        $scope.girls = [];
        $scope.fanArt = [];
        $scope.characters = [];
        $scope.community = [];
        $scope.games = [];
        $scope.girlDetails = false;

        var girlsRequest = $http.get("assets/data/girls.json");
        var characterRequest = $http.get("assets/data/characters.json");
        var fanartRequest = $http.get("assets/data/fanart.json");
        var redditRequest = $http.get("//www.reddit.com/r/powerpuffgirls/new.json");
        var gamesRequest = $http.get("assets/data/games.json");

        $q.all([girlsRequest, characterRequest, fanartRequest, redditRequest, gamesRequest]).then(function(response) {

            $scope.girls = response[0].data;
            $scope.characters = response[1].data;
            $scope.fanArt = response[2].data;
            $scope.community = response[3].data.data.children;
            $scope.games = response[4].data;
            console.log(response.data);
            console.log("Community", $scope.community);
        }, function(response) {
            console.log("Couldn't fetch the good info...");
            console.log(response);
        });

        $scope.girlDetail = function (girl) {
            console.log(girl);
            $scope.details = girl;
            $scope.girlDetails = true;
            document.getElementById('self2').src = "assets/media/" + girl.video;

            $('html,body').animate({scrollTop: $("#girlDetailSnap").offset().top}, 1000);
            document.getElementById('self2').play();

            Materialize.toast('Learn About ' + girl.name + "!", 4000);

        };

    });


    app.directive('wrapOwlcarousel', function() {

        return {

            restrict: 'E',

            link: function(scope, element, attrs) {
                scope.initCarousel = function() {
                    $(".fanOwl").owlCarousel({
                        responsive: {
                            0: {
                                items: 3
                            },
                            600: {
                                items: 3
                            },
                            1000: {
                                items: 4
                            }
                        }
                    });
                    $(".characterOwl").owlCarousel({
                                            responsive: {
                                                0: {
                                                    items: 3
                                                },
                                                600: {
                                                    items: 3
                                                },
                                                1000: {
                                                    items: 4
                                                }
                                            }
                                        });
                };
            }
        }

    });

    app.directive('owlCarouselItem', [function() {
        return function(scope) {
            if (scope.$last) {
                scope.initCarousel();
            }
        };
    }]);