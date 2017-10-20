angular.module('Quiz', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('questions', {
            url: '/questions/{id}',
            templateUrl: '/questions.html',
            controller: 'QuestionsCtrl'
        })
        .state('results', {
            url: '/results/{id}',
            templateUrl: '/results.html',
            controller: 'ResultsCtrl'
        });

    $urlRouterProvider.otherwise('questions');
}])
.controller('testCtrl', function($scope) {
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
                    points: 0
                },
                {
                    text: "Me too thanks",
                    points: 2
                },
                {
                    text: "Go to Institute",
                    points: 4
                },
                {
                    text: "Hit up the club",
                    points: 6
                },
                {
                    text: "Watch TV",
                    points: 8
                }
            ]
        },
        {
            title: "Who is your most favorite actor?",
            responses: [
                {
                    text: "Don't Know",
                    points: 0
                },
                {
                    text: "Me too thanks",
                    points: 2
                },
                {
                    text: "Go to Institute",
                    points: 4
                },
                {
                    text: "Hit up the club",
                    points: 6
                },
                {
                    text: "Watch TV",
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
    //$scope.currentQuestion = questions[0].title;

    $scope.nextQuestion = function() {
        $scope.questionNumber++;
    }

    $scope.addPoints = function() {
        $scope.totalPoints += $scope.questions[$scope.questionNumber].responses[$scope.currentSelection].points;
        console.log("Current Selection Points: " + $scope.questions[$scope.questionNumber].responses[$scope.currentSelection].points);
        console.log("Total Points: " + $scope.totalPoints);
        $scope.nextQuestion();       
    };
})


/*
[
    {
        imgUrl: "",
        title: "",
        desc: ""
    },
    ...
]

[
    {
        title: "",
        [
            {
                text: "",
                points: 0
            }
            ...
        ]
    },
    ...
]
*/
