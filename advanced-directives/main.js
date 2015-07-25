var app = angular.module('myApp',[]);

// app.directive('panel', function() {
// 	return {
// 		link: function(scope, element, attrs) {
// 			scope.dataSource = "directive";
// 		},
// 		restrict: "E",
// 		scope: true,
// 		template: function(){
// 			return angular.element(document.querySelector('#template')).html();
// 		},
// 		transclude: true
// 	}
// });

app.directive('simpleRepeater', function() {
	return {
		scope: {
			data: '=source',
			propName: '@itemName'
		},
		transclude: 'element',
		compile: function(element, attrs, transcludeFn) {
			return function($scope, $element, $attrs) {
				$scope.$watch("data.length", function() {
					var parent = $element.parent();
					// remove clears the dom similar to 
					parent.children().remove();
					for(var i = 0; i<$scope.data.length; i++) {
						var childScope = $scope.$new();
						childScope[$scope.propName] =$scope.data[i];
						transcludeFn(childScope,function(clone) {
							parent.append(clone);
						})
					}
				});
			}
		}
	}
})

app.controller('defaultCtrl', function($scope) {
	$scope.dataSource = "controller";
	$scope.products = 
		[
			{ name: "Apples", price: 1.20, quantity: 2 },
	        { name: "Bananas", price: 2.42, quantity: 3 },
	        { name: "Pears", price: 2.02, quantity: 1 }
        ];
    
    $scope.demoValue = 'demoValue';
    $scope.demo = {
        value: 'demoValue'
    };

    $scope.changeData = function() {
    	$scope.products.push({name:"Cherries", price: 4.02});
    	for(var i =0; i<$scope.products.length; i++) {
    		$scope.products[i].price++;
    	}
    }
});