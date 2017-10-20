angular.module('Quiz', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
        })
        .state('questions', {
            url: '/questions',
            templateUrl: '/questions.html',
            controller: 'testCtrl'
        })
        .state('results', {
            url: '/results',
            templateUrl: '/results.html',
            controller: 'resultCtrl'
        });

    $urlRouterProvider.otherwise('home');
}])
.factory('resultFactory', [function(){
    var o = {
        index: 0,
        results: [
            {
                title: "You are a Sedan!",
                imgUrl: "https://i2.wp.com/bestsellingcarsblog.com/wp-content/uploads/2010/12/hyundai-atos-sudan-2010.jpg",
                description: "Yep."
            },
            {
                title: "You are a Minivan!",
                imgUrl: "https://cars.usnews.com/dims4/USNEWS/a26bd14/2147483647/resize/640x420%3E/format/jpeg/quality/85/?url=https%3A%2F%2Fcars.usnews.com%2Fstatic%2Fimages%2Farticle%2F201704%2F126811%2F6_CAR15SedonaSoulEV298_640x420.jpg",
                description: "But what about the droid attack on the soccer moms?"
            },
            {
                title: "You are an SUV!",
                imgUrl: "http://st.motortrend.com/uploads/sites/5/2016/08/Toyota-4Runner-TRD-Pro-front-three-quarter-01.jpg",
                description: "My allegiance is to the republic! To democracy!"
            },
            {
                title: "You are a Pickup Truck!",
                imgUrl: "https://i.pinimg.com/736x/06/d9/97/06d9975932399c0e83c94957fc980c52.jpg",
                description: "I must be Frank your majesty."
            },
            {
                title: "You are a Motorcycle!",
                imgUrl: "http://images.mcn.bauercdn.com/pagefiles/487776/ducati_1098-photo.jpg",
                description: "YOUR new empire?"
            },
            {
                title: "You are a Sports Car!",
                imgUrl: "http://2p2bboli8d61fqhjiqzb8p1a.wpengine.netdna-cdn.com/wp-content/uploads/2017/02/audi-r8-vossen-2917-main.jpg",
                description: "Don't try it!"
            },
            {
                title: "You are a Luxury Car!",
                imgUrl: "https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/mercedes-benz-cls_1_0.jpg?itok=LwID0QnI",
                description: "You are a bold one."
            },
            {
                title: "You are a School Bus!",
                imgUrl: "https://lh3.googleusercontent.com/SULJh730ZFqrL_rNFzPK-TTunzSG8IyzfwLTjr_vGZk0EwebW0k7yMT4FNUSj0F0Yc18UGfsVRVfG3NIdA=h1264",
                description: "This is where the fun begins."
            },
            {
                title: "You are a Semi Truck!",
                imgUrl: "http://thenewswheel.com/wp-content/uploads/2016/01/Movie-Optimus-Prime-truck-auction.png",
                description: "I'll try being Optimus Prime, that's a good trick."
            },
            {
                title: "You are a MONSTER TRUCK!!",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Grave_digger_(truck).jpg",
                description: "Is that legal? I will make it legal."
            },
            {
                title: "You are the Perfect Car",
                imgUrl: "http://i.dailymail.co.uk/i/pix/2012/12/11/article-2246653-1676ABEE000005DC-485_634x724.jpg",
                description: "You are the ideal car. You may not like it, but this is what peak performance looks like."
            }
        ]
    };
    return o;
}])
.controller('testCtrl', [
'$scope',
'resultFactory',
function($scope, resultFactory) {
    $scope.continue = "Continue";
    $scope.link = "#/questions";
    $scope.index = 0;
    $scope.currentSelection = 0;
    $scope.questionNumber = 0;
    $scope.totalPoints = 0;
    $scope.questions = [
        {
            title: "What are you most likely to do on a Saturday night?",
            responses: [
                {
                    text: "Don't Know",
                    points: 0
                },
                {
                    text: "Me too thanks",
                    points: 8
                },
                {
                    text: "Go to Institute",
                    points: 6
                },
                {
                    text: "Hit up the club",
                    points: 4
                },
                {
                    text: "Watch TV",
                    points: 2
                }
            ]
        },
        {
            title: "What is your favorite color?",
            responses: [
                {
                    text: "Don't know",
                    points: 8
                },
                {
                    text: "Magenta",
                    points: 2
                },
                {
                    text: "Orange",
                    points: 4
                },
                {
                    text: "Neon Pink",
                    points: 6
                },
                {
                    text: "blue",
                    points: 0
                }
            ]
        },
        {
            title: "What type of phone do you have?",
            responses: [
                {
                    text: "Windows",
                    points: 0
                },
                {
                    text: "Landline",
                    points: 6
                },
                {
                    text: "Bongo Phone",
                    points: 8
                },
                {
                    text: "Nokia",
                    points: 4
                },
                {
                    text: "Android/iPhone",
                    points: 2
                }
            ]
        },
        {
            title: "What is your general approach to group projects?",
            responses: [
                {
                    text: "Abandon the project",
                    points: 2
                },
                {
                    text: "Work hard and finish",
                    points: 0
                },
                {
                    text: "Start a new project before finishing the previous one",
                    points: 4
                },
                {
                    text: "Constantly come up with new ideas without ever completing the assignment",
                    points: 6
                },
                {
                    text: "Withdraw from the class",
                    points: 8
                }
            ]
        },
        {
            title: "Which is proper?",
            responses: [
                {
                    text: "whom",
                    points: 2
                },
                {
                    text: "whomst'd've",
                    points: 8
                },
                {
                    text: "who",
                    points: 0
                },
                {
                    text: "whomst",
                    points: 4
                },
                {
                    text: "whomst'd",
                    points: 6
                }
            ]
        },
        {
            title: "How do you respond in the affimative?",
            responses: [
                {
                    text: "ok",
                    points: 0
                },
                {
                    text: "k",
                    points: 6
                },
                {
                    text: "kk",
                    points: 4
                },
                {
                    text: "Okay",
                    points: 2
                },
                {
                    text: "Potassium",
                    points: 8
                }
            ]
        },
        {
            title: "Who is your most favorite actor/actress?",
            responses: [
                {
                    text: "K. Reeves",
                    points: 4
                },
                {
                    text: "H. Christensen",
                    points: 6
                },
                {
                    text: "J. Lawrence",
                    points: 0
                },
                {
                    text: "J. Depp",
                    points: 2
                },
                {
                    text: "T. Hanks",
                    points: 8
                }
            ]
        },
        {
            title: "What do you look for in a TV show?",
            responses: [
                {
                    text: "To be fair...",
                    points: 8
                },
                {
                    text: "A good fanbase/community",
                    points: 6
                },
                {
                    text: "An interesting plot",
                    points: 0
                },
                {
                    text: "Attractive actors/actresses",
                    points: 2
                },
                {
                    text: "Good cinematography",
                    points: 4
                }
            ]
        },
        {
            title: "How do you pronounce '11'?",
            responses: [
                {
                    text: "one one",
                    points: 2
                },
                {
                    text: "oneteen",
                    points: 6
                },
                {
                    text: "ten-one",
                    points: 4
                },
                {
                    text: "onety-one",
                    points: 8
                },
                {
                    text: "eleven",
                    points: 0
                }
            ]
        },
        {
            title: "And finally, what day is it my dudes?",
            responses: [
                {
                    text: "Thursday",
                    points: 0
                },
                {
                    text: "Friday",
                    points: 0
                },
                {
                    text: "Monday",
                    points: 0
                },
                {
                    text: "Tuesday",
                    points: 0
                },
                {
                    text: "Wednesday",
                    points: 8
                }
            ]
        }
    ];

    $scope.computeResults = function() {
        resultFactory.index = Math.floor($scope.totalPoints/8);
    }
    $scope.nextQuestion = function() {
        $scope.questionNumber++;
        if($scope.questionNumber == 9) {
            $scope.continue = "Finish";
        }
        if($scope.questionNumber == 10) {
            $scope.link = "#/results";
            $scope.computeResults();
        }
    }

    $scope.addPoints = function() {
        $scope.totalPoints += $scope.questions[$scope.questionNumber].responses[$scope.currentSelection].points;
        console.log("Current Selection Points: " + $scope.questions[$scope.questionNumber].responses[$scope.currentSelection].points);
        console.log("Total Points: " + $scope.totalPoints);
        $scope.nextQuestion();
    };
}])
.controller('resultCtrl', [
    '$scope',
    'resultFactory',
    function($scope, resultFactory) {
        $scope.result = resultFactory.results[resultFactory.index];
        console.log(resultFactory.index);
}]);