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
                    points: 2
                },
                {
                    text: "Android/iPhone",
                    points: 2
                }
            ]
        },
        {
            title: "What are you most likely to do on a Saturday night?",
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
            title: "What are you most likely to do on a Saturday night?",
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
            title: "What are you most likely to do on a Saturday night?",
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
            title: "What are you most likely to do on a Saturday night?",
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
