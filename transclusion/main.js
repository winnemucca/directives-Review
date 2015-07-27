var app = angular.module('myApp',[]);

app.controller('mainCtrl', function($scope) {
	$scope.message = "This is a message";
	console.log($scope);

	// this would create a brand new scope $scope.baseLocation = "Yavin 4"
	$scope.answers = {baseLocation:"Yavin 4"};
});

app.directive('displayBox', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/templateBox',
		controller: function($scope) {
			$scope.hidden = false;
			$scope.close = function() {
				$scope.hidden = true;
			}
			$scope.message= 'I\m hijacking you';
			console.log($scope);
		},
		transclude: true,
		scope: true
	}

})

app.directive('myQuestion', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'templates/myQuestion.html',
		scope: {
			questionText: '@q'
		}
	}
})