
var app = angular.module('directivePractice')
.controller('mainController', function($scope, $route, $routeParams, $location){
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
     $scope.message = 'Test';
});

//app.directive('{myDirective}', [function () {
//	return {
//		restrict: '{}',
//		link: function (scope, element, attrs) {
//
//		}
//	};
//}]);
