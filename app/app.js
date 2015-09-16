var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
//  route for home page
  .when('/#home', {
    templateUrl: 'app/views/template.html',
    controller: 'homeController'
      })
      .when('/#about', {
    templateUrl: 'app/views/about.html',
    controller: 'aboutController'
  })
   .when('/#contact', {
    templateUrl: 'app/views/contact.html',
    controller: 'contactController'
  });
    


//app.controller('mainController', function ($scope, $route, $routeParams, $location) {
//    $scope.$route = $route;
//     $scope.$location = $location;
//     $scope.$routeParams = $routeParams;
//    $scope.message = 'Everyone come and see how good I look!';
//
//});

});

