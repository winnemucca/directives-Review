var app = angular.module('myApp', []);

app.controller('defaultCtrl', function($scope) {
	$scope.dataValue = "Not Sure";
	$scope.products = [

		{name: "apples", price: 2.42, quantity: 2},
		{name: "banana", price: 2.02, quantity: 1},
		{name: "vodka", price: 1.99, quantity: 5}
	];
});

