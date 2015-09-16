
angular.module('app')
.controller('mainController', function($scope, $route, $routeParams, $location){
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
     $scope.message = 'Everyone come and see how good I look!';
});

//app.directive('{myDirective}', [function () {
//	return {
//		restrict: '{}',
//		link: function (scope, element, attrs) {
//
//		}
//	};
//}]);
