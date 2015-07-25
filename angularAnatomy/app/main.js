var app = angular.module('myApp',[]);

app.controller('defaultCtrl',function($scope,$location) {
	// $scope.todos = 
	// 	[
	//         { action: "Get groceries", complete: false },
	//         { action: "Call plumber", complete: false },
	//         { action: "Buy running shoes", complete: true },
	//         { action: "Buy flowers", complete: false },
	//         { action: "Call family", complete: false }
	//     ];

	// $scope.buttonNames = ["Red","Green","Blue"];

	// $scope.data = {
	// 	rowColor: "Blue",
	// 	columnColor: "Green"
	// };
	// 
	$scope.message = "Tap Me!";

	$scope.dataValue = false;

	// $scope.handleEvent = function (e) {
	// 	console.log("event type: " +e.type);
	// 	$scope.data.columnColor = e.type == "mouseover" ?"Green": "Blue";
	// }

	// $scope.settings = {
	// 	Rows:"Red",
	// 	Columns:"Green"
	// };

});

app.directive("tap",function() {
	return function(scope, elem, attrs) {
		elem.on("touchstart touchend", function () {
			scope.$apply(attrs["tap"]);
		});
	}
})