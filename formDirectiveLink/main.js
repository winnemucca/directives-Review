var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope) {
	// $scope.data = {message: 'I have not been clicked'};
	// $scope.clickHandler = function(data) {
	// 	data.message = "i have been clicked";
	// }

	// $scope.user1 = {
	// 	name: 'Luke',
	// 	selected: false
	// }

	// $scope.size= 150;
});

// app.directive('myClick', function($parse) {
// 	return {
// 		link:function(scope, el, attrs) {
// 			// turns expression into a function
// 			var fn = $parse(attrs['myClick']);
// 			el.on('click', function() {
// 				// used scope $apply to update
// 				scope.$apply(function() {
// 					fn(scope);
// 				})
// 			})
// 		}
// 	}
// })

app.directive('userTile', function() {
	return {
		restrict: 'E',
		scope: {
			user: '='
		},
		templateUrl: 'userTile.html'
		
	}
})

app.directive('userClickSelect',function() {
	return {
		restrict: 'A',
		link: function(scope, el, attrs) {
			el.on('click', function() {
				$scope.user.selected = !$scope.user.selected;
				scope.$apply();
			})
		}
	}
})

app.directive('fontScale', function() {
	return {
		link:function(scope, el, attrs) {
			scope.$watch(attrs['fontScale'], function(newValue) {
				el.css('font-size', newValue + '%');
			})
		}
	}
})


app.directive('removeFriend', function() {
	return {

	}
})