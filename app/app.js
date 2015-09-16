var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
//  route for home page
  .when('/', {
    templateUrl: 'template.html',
    controller: 'mainController'
    
  });
    
//app.controller('mainController', function ($scope, $route, $routeParams, $location) {
//    $scope.$route = $route;
//     $scope.$location = $location;
//     $scope.$routeParams = $routeParams;
//    $scope.message = 'Everyone come and see how good I look!';
//
//});

});

