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