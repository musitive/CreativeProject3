angular.module('Quiz', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
    $stateProvider
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

    $urlRouterProvider.otherwise('results');
}])
.factory('resultFactory', [function(){
    var o = {
        results: [
            {
                title: "Sudan",
                imgUrl: "https://i2.wp.com/bestsellingcarsblog.com/wp-content/uploads/2010/12/hyundai-atos-sudan-2010.jpg",
                description: "Hello There"
            },
            {
                title: "Minivan",
                imgUrl: "https://cars.usnews.com/dims4/USNEWS/a26bd14/2147483647/resize/640x420%3E/format/jpeg/quality/85/?url=https%3A%2F%2Fcars.usnews.com%2Fstatic%2Fimages%2Farticle%2F201704%2F126811%2F6_CAR15SedonaSoulEV298_640x420.jpg",
                description: "Hello There"
            },
            {
                title: "Sudan",
                imgUrl: "https://i2.wp.com/bestsellingcarsblog.com/wp-content/uploads/2010/12/hyundai-atos-sudan-2010.jpg",
                description: "Hello There"
            },
            {
                title: "Sudan",
                imgUrl: "https://i2.wp.com/bestsellingcarsblog.com/wp-content/uploads/2010/12/hyundai-atos-sudan-2010.jpg",
                description: "Hello There"
            },
            {
                title: "Sudan",
                imgUrl: "https://i2.wp.com/bestsellingcarsblog.com/wp-content/uploads/2010/12/hyundai-atos-sudan-2010.jpg",
                description: "Hello There"
            },
            {
                title: "Sudan",
                imgUrl: "https://i2.wp.com/bestsellingcarsblog.com/wp-content/uploads/2010/12/hyundai-atos-sudan-2010.jpg",
                description: "Hello There"
            },
            {
                title: "Sudan",
                imgUrl: "https://i2.wp.com/bestsellingcarsblog.com/wp-content/uploads/2010/12/hyundai-atos-sudan-2010.jpg",
                description: "Hello There"
            },
            {
                title: "Sudan",
                imgUrl: "https://i2.wp.com/bestsellingcarsblog.com/wp-content/uploads/2010/12/hyundai-atos-sudan-2010.jpg",
                description: "Hello There"
            },
            {
                title: "Sudan",
                imgUrl: "https://i2.wp.com/bestsellingcarsblog.com/wp-content/uploads/2010/12/hyundai-atos-sudan-2010.jpg",
                description: "Hello There"
            },
            {
                title: "Sudan",
                imgUrl: "https://i2.wp.com/bestsellingcarsblog.com/wp-content/uploads/2010/12/hyundai-atos-sudan-2010.jpg",
                description: "Hello There"
            }
        ]
    };
    return o;
}])
.controller('testCtrl', [
'$scope',
function($scope) {
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
                    text: "Don't Know",
                    points: 8
                },
                {
                    text: "Me too thanks",
                    points: 6
                },
                {
                    text: "Go to Institute",
                    points: 4
                },
                {
                    text: "Hit up the club",
                    points: 2
                },
                {
                    text: "Watch TV",
                    points: 0
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

    $scope.nextQuestion = function() {
        $scope.questionNumber++;
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
        $scope.result = resultFactory.results[0];
}]);